import { Document, Page, View, Text } from "@react-pdf/renderer";

export const MyDocument = () => (
  <Document>
    <Page>
      <View>
        <Text>Hello, React-PDF and Express!</Text>
      </View>
    </Page>
  </Document>
);
