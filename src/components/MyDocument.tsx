import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

export const MyDocument: React.FC = () => (
  <Document>
    <Page>
      <View>
        <Text>Hello, React-PDF and Express!</Text>
      </View>
    </Page>
  </Document>
);
