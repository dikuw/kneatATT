const fs = require('fs');
const { Document, Packer, Table, TableRow, TableCell, Paragraph, TextRun, ImageRun, AlignmentType, VerticalAlign, WidthType, TableHeader } = require('docx');

exports.createDoc = () => {

  const resultsRows = [];

  resultsRows.push(
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "1",
                  font: "Arial",
                  size: 18,
                }),
              ],
              alignment: AlignmentType.CENTER,
            })
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Actual configuration matches the expected.",
                  font: "Arial",
                  size: 18,
                }),
              ],
              indent: { left: 100 }, 
            })
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Actual configuration does match the expected.",
                  font: "Arial",
                  size: 18,
                }),
              ],
              indent: { left: 100 }, 
            })
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "test passed" ,
                  font: "Arial",
                  size: 18,
                  italics: true,
                  highlight: "green",
                }),
              ],
              alignment: AlignmentType.CENTER,
            })
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
      ],
      cantSplit: true,
    }),
  );

  resultsRows.push (
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new ImageRun({
                  data: fs.readFileSync(`./tests/screenshots/screenshot.png`),
                  transformation: {
                    width: 710,
                    height: 346,
                  },
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
          ],
          columnSpan: 5,
        }),
      ],
    }),
  );

  const headerRow1 = new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Verification of Document Template Approval Template Configuration",
                bold: true,
                font: "Arial",
                size: 18,
              }),
            ],
            indent: { left: 100 },
            spacing: {
              before: 40,
              after: 40,
            },
          })
        ],
        columnSpan: 5,
        shading: {
          fill: "CBE5DA",
        },
      }),
    ],
    TableHeader: true,
  });

  const headerRow2 = new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Acceptance criteria: the configured Document Template Approval Template(s) match that documented in the PMD.",
                font: "Arial",
                size: 18,
              }),
            ],
            indent: { left: 100 },
            spacing: {
              before: 40,
              after: 40,
            },
          }),
        ],
        columnSpan: 5,
      }),
    ],
    tableHeader: true,
  });

  const headerRow3 = new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `Test Date/Time: ${new Date()}`,
                font: "Arial",
                size: 18,
              }),
            ],
            indent: { left: 100 },
            spacing: {
              before: 40,
              after: 40,
            },
          })
        ],
        columnSpan: 5,
      }),
    ],
    tableHeader: true,
  });

  const headerRow4 = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 400,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "#",
                bold: true,
                font: "Arial",
                size: 18,
              }),
            ],
            spacing: {
              before: 40,
              after: 40,
            },
            alignment: AlignmentType.CENTER,
          })
        ],
        verticalAlign: VerticalAlign.CENTER,
        shading: {
          fill: "CBE5DA",
        },
      }),
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Expected",
                bold: true,
                font: "Arial",
                size: 18,
              }),
            ],
            alignment: AlignmentType.CENTER,
          })
        ],
        verticalAlign: VerticalAlign.CENTER,
        shading: {
          fill: "CBE5DA",
        },
      }),
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Actual",
                bold: true,
                font: "Arial",
                size: 18,
              }),
            ],
            alignment: AlignmentType.CENTER,
          })
        ],
        verticalAlign: VerticalAlign.CENTER,
        shading: {
          fill: "CBE5DA",
        },
      }),
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "Result",
                bold: true,
                font: "Arial",
                size: 18,
              }),
            ],
            alignment: AlignmentType.CENTER,
          })
        ],
        verticalAlign: VerticalAlign.CENTER,
        shading: {
          fill: "CBE5DA",
        },
      }),
    ],
    tableHeader: true,
  });

  let rows = [ headerRow1, headerRow2, headerRow3, headerRow4, ...resultsRows ];

  const table = new Table({
    width: {
      size: 100,
      type: 'pct',
    },
    rows,
  });

  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 500,
            bottom: 500,
            left: 500,
            right: 500,
          }
        },
      },
      children: [table],
    }],
  });

  Packer.toBuffer(doc).then( (buffer) => {
    fs.writeFileSync(`./tests/output/output.docx`, buffer);
  });

}