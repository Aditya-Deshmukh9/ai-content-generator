"use server";

import MarkdownIt from "markdown-it";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const { markdown }: { markdown: string } = await request.json();

        if (!markdown || typeof markdown !== "string") {
            return NextResponse.json(
                { error: "Missing or invalid 'markdown' field" },
                { status: 400 }
            );
        }

        const md = new MarkdownIt();
        const rawHtml = md.render(markdown);

        // ✅ Inject custom CSS styling
        const styledHtml = `
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            /* ====== GLOBAL STYLES ====== */
            body {
              font-family: "Segoe UI", Roboto, sans-serif;
              line-height: 1.6;
              font-size: 14px;
              color: #222;
              padding: 40px;
              max-width: 800px;
              margin: auto;
            }

            h1, h2, h3, h4 {
              color: #0d6efd;
              margin-top: 24px;
            }

            h1 {
              border-bottom: 2px solid #0d6efd;
              padding-bottom: 8px;
            }

            p {
              margin-bottom: 12px;
            }

            ul, ol {
              margin: 12px 0 12px 24px;
            }

            strong {
              color: #000;
            }

            code {
              background-color: #f4f4f4;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: "Courier New", monospace;
            }

            pre {
              background: #f8f9fa;
              padding: 10px;
              border-radius: 8px;
              overflow-x: auto;
            }

            blockquote {
              border-left: 4px solid #0d6efd;
              padding-left: 12px;
              color: #555;
              font-style: italic;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 16px;
            }

            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }

            th {
              background-color: #0d6efd;
              color: white;
            }

            a {
              color: #0d6efd;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }

            hr {
              border: 0;
              border-top: 1px solid #ddd;
              margin: 24px 0;
            }

            @page {
              margin: 1cm;
            }
          </style>
        </head>
        <body>
          ${rawHtml}
        </body>
      </html>
    `;

        // 🧠 Detect environment (local vs production)
        const isLocal = !process.env.AWS_REGION && !process.env.VERCEL;

        const browser = await puppeteer.launch({
            args: isLocal ? [] : chromium.args,
            defaultViewport: null,
            executablePath: isLocal
                ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
                : await chromium.executablePath(),
            headless: true,
        });

        const page = await browser.newPage();
        await page.setContent(styledHtml, { waitUntil: "networkidle0" });

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
        });

        await browser.close();

        // Ensure the body is a valid BodyInit for NextResponse (ArrayBuffer / Buffer / Uint8Array)
        // Puppeteer's page.pdf returns a Buffer in Node, but TypeScript may infer a Uint8Array-like type;
        // convert to a Buffer and cast to BodyInit to satisfy the type checker.
        const body = Buffer.isBuffer(pdfBuffer) ? pdfBuffer : Buffer.from(pdfBuffer);
        return new NextResponse(body as unknown as BodyInit, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="styled-markdown.pdf"',
            },
        });
    } catch (error) {
        console.error("❌ Error generating PDF:", error);
        return NextResponse.json(
            { error: "Internal Server Error while generating PDF" },
            { status: 500 }
        );
    }
}
