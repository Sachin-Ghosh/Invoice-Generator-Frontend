// components/InvoicePDF.js
import React from "react";
import dynamic from "next/dynamic";
import { BlobProvider } from "@react-pdf/renderer";

import { useAuth } from "@/context/AuthContext";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((module) => module.PDFViewer),
  {
    ssr: false,
  }
);

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((module) => module.PDFDownloadLink),
  {
    ssr: false,
  }
);

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    // padding: 20,
    fontSize: 11,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  section: {
    marginBottom: 20,
  },
  spaceBetween: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  reportTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  addressTitle: { fontSize: 11, fontStyle: "bold" },

  invoice: { fontWeight: "bold", fontSize: 20 },

  invoiceNumber: { fontSize: 11, fontWeight: "bold" },
  address: { fontWeight: 400, fontSize: 10 },
  theader: {
    marginTop: 20,
    fontSize: 10,
    fontStyle: "bold",
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1,
    height: 20,
    backgroundColor: "#DEDEDE",
    borderColor: "whitesmoke",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

  tbody: {
    fontSize: 9,
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1,
    borderColor: "whitesmoke",
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  total: {
    fontSize: 9,
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1.5,
    borderColor: "whitesmoke",
    borderBottomWidth: 1,
  },

  tbody2: { flex: 2, borderRightWidth: 1 },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold",
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
  },

});

export default function InvoicePDF({ invoice }) {
  const PDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.titleContainer}>
          <View style={styles.spaceBetween}>
            <Text style={styles.reportTitle}>{invoice.customerName}</Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.spaceBetween}>
            <View>
              <Text style={styles.invoice}>Invoice </Text>
              <Text style={styles.invoiceNumber}>Invoice number: {invoice.number} </Text>
            </View>
            <View>
              <Text style={styles.addressTitle}>F/602, Poonam Park View, </Text>
              <Text style={styles.addressTitle}>Global City,</Text>
              <Text style={styles.addressTitle}>Virar(W), Maharashtra.</Text>
            </View>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.spaceBetween}>
            <View style={{ maxWidth: 200 }}>
              <Text style={styles.addressTitle}>Bill to </Text>
              <Text style={styles.address}>{invoice.address}</Text>
            </View>
            <Text style={styles.addressTitle}>{invoice.date}</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
          <View style={[styles.theader, styles.theader2]}>
            <Text>Items</Text>
          </View>
          <View style={styles.theader}>
            <Text>Price</Text>
          </View>
          <View style={styles.theader}>
            <Text>Qty</Text>
          </View>
          <View style={styles.theader}>
            <Text>Amount</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={[styles.tbody, styles.tbody2]}>
            <Text>{invoice.productName}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{invoice.unitPrice} </Text>
          </View>
          <View style={styles.tbody}>
            <Text>{invoice.quantity}</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{invoice.totalPrice}</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={styles.total}>
            <Text></Text>
          </View>
          <View style={styles.total}>
            <Text> </Text>
          </View>
          <View style={styles.tbody}>
            <Text>Total</Text>
          </View>
          <View style={styles.tbody}>
            <Text>{invoice.totalPrice}</Text>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.spaceBetween}>
            <View style={{ maxWidth: 200 }}>
              <Text style={styles.addressTitle}>Payment Status:</Text>
              <Text style={styles.address}>{invoice.paymentStatus}</Text>
            </View>
            <Text style={styles.addressTitle}>Signature</Text>
          </View>
        </View>

      </Page>
    </Document>
  );

  const downloadFile = () => {
    const blobUrl = URL.createObjectURL(
      <BlobProvider document={<PDF />} fileName="sample.pdf">
        {({ url }) => (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Click Here
          </a>
        )}
      </BlobProvider>
    );

    window.open(blobUrl, "_blank");
  };

  return (
    <div className="grid grid-cols-2">
      {/* <div className='py-2'>
                
            </div> */}

      <div className="py-2">
        <PDFDownloadLink document={<PDF />} fileName="sample.pdf">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <button className="btn btn-sm bg-white text-black mb-2">Download</button>
            )
          }
        </PDFDownloadLink>

        <PDFViewer width="200%" height="350%">
          <PDF />
        </PDFViewer>
      </div>
    </div>
  );
}
