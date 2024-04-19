// components/InvoicePDF.js
import React from 'react';
import dynamic from 'next/dynamic';
import { BlobProvider } from '@react-pdf/renderer';


import { useAuth } from '@/context/AuthContext';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';



const PDFViewer = dynamic(() => import('@react-pdf/renderer').then((module) => module.PDFViewer), {
      ssr: false,
    });

const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((module) => module.PDFDownloadLink), {
  ssr: false,
});    

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
  },
  total: {
    fontSize: 14,
    marginTop: 20,
    fontWeight: 'bold',
  },
});


export default function InvoicePDF( { invoice } ) {
    const PDF = () =>   <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Invoice</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Customer Name:</Text>
          <Text style={styles.value}>{invoice.customerName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Product Name:</Text>
          <Text style={styles.value}>{invoice.productName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Quantity:</Text>
          <Text style={styles.value}>{invoice.quantity}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Unit Price:</Text>
          <Text style={styles.value}>{invoice.unitPrice}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Total Price:</Text>
          <Text style={styles.value}>{invoice.totalPrice}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Payment Status:</Text>
          <Text style={styles.value}>{invoice.paymentStatus}</Text>
        </View>
        <Text style={styles.total}>Total Price: {invoice.totalPrice}</Text>
      </View>
    </Page>
  </Document>

      const downloadFile = () => {
        const blobUrl = URL.createObjectURL(
          <BlobProvider document={<PDF />} fileName="sample.pdf">
            {({ url }) => <a href={url} target="_blank" rel="noopener noreferrer">Click Here</a>}
          </BlobProvider>
        );
    
        window.open(blobUrl, '_blank');
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
                <button className="btn btn-sm mb-2">Download</button>
              )
            }
          </PDFDownloadLink>

          <PDFViewer width="100%" height="200%">
            <PDF />
          </PDFViewer>
        </div>
      </div>
    );
}

