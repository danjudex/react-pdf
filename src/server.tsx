import express from "express";
import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { MyDocument } from "./components/MyDocument";

const app = express();
const PORT = 3000;

app.get("/generate-pdf", async (_req, res) => {
  const pdfStream = await ReactPDF.renderToStream(<MyDocument />);

  res.setHeader("Content-Type", "application/pdf");

  pdfStream.pipe(res);
  pdfStream.on("end", () => console.log("Done streaming, response sent."));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
