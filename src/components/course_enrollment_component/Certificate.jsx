import React,{useState, useEffect} from 'react';
import './courseEnroll.css';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import pic from './img/persistent_logo.png';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const Certificate = (props) => {
    const name = localStorage.getItem('username');
    const [courseName, setCourseName] = useState('')
    useEffect(()=> {
        axios.get(`http://localhost:5000/course/${props.match.params.id}`)
        .then(res => setCourseName(res.data.course_name))
        .catch( err => console.log(err))
    },[props.match.params.id])
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
        <Container className='p-2' style={{ height: "100vh" }}>
            <PDFViewer width="100%" height="700" >
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
                                <Text style={{ margin: 20 }}>For successfully completing <span style={{ color: 'rgb(255, 145, 0)', fontWeight: 'bold' }}>{courseName}</span> course at Gurukul</Text>
                            </View>
                        </View>
                    </Page>
                </Document >
            </PDFViewer>
        </Container>
    )
}
export default Certificate;