import React from 'react';
import './courseEnroll.css';
import { Modal } from 'react-bootstrap';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import pic from './img/persistent_logo.png';

const Certificate = (props) => {
    const name = localStorage.getItem('username');
    const styles = StyleSheet.create({
        header: {
            width: '30%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        image: {
            height: 100,
            flexDirection: 'row',
        },
        page: {
            flexDirection: 'column',
            backgroundColor: 'white',
            textAlign: 'center',
        },
        containerCertificate: {
            padding: 20,
            flexGrow: 1,
            backgroundColor: "rgb(191, 235, 246)",
            border: "10px solid gray",
        },
        marquee: {
            color: "rgb(255, 145, 0)",
            fontSize: "40"
        },
        person: {
            borderBottom: "2px solid black",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "32px"
        },
        outerBorder: {
            width: "80%",
            margin: 80,
            padding: 10,
            border: "20px solid gray"
        }
    });
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="certificate-modal"
            style={{
                width: '100%', height: '350vw', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="certificate-modal">
                    Course Completion Certificate
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PDFViewer width="100%" height="500" >
                    <Document>
                        <Page size="A4" orientation="landscape" style={styles.page}>
                            <View style={styles.outerBorder}>
                                <View style={styles.containerCertificate}>
                                    <View style={styles.header}>
                                        <View style={styles.image}>
                                            <Image style={{ width: 50, height: 50 }} src={pic} />
                                            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Gurukul</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.marquee} >Certificate of Completion </Text>
                                    <Text style={{ margin: 20 }} >This certificate is presented to </Text>
                                    <Text style={styles.person} >{name}</Text>
                                    <Text style={{ margin: 20 }}>For successfully completing <span style={{color:'rgb(255, 145, 0)', fontWeight:'bold'}}>{props.courseName}</span> course at Gurukul</Text>
                                </View>
                            </View>
                        </Page>
                    </Document >
                </PDFViewer>
            </Modal.Body>
        </ Modal >
    )
}
export default Certificate;