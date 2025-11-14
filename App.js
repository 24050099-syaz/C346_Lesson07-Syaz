import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Exe1 = () =>{
    return (
        <View style={{paddingTop:50}}>
            <Text style={{fontSize:24}}>RP Values</Text>
            <Text style={{color:'green'}}>Excellence</Text>
            <Text style={{backgroundColor:'yellow'}}>Customer-Centric</Text>
            <Text style={{fontStyle:"italic"}}>Integrity</Text>
            <Text style={{textAlign:"center"}}>Teamwork</Text>
            <Text style={{backgroundColor:'black',color:'white'}}>Enterprising</Text>
        </View>
    );
};
const Exe2 = () =>{
    return (
        <View style={styles_exe2and3.container}>
            <View style={styles_exe2and3.greenBox}>
                <Text style={[styles_exe2and3.boxText, styles_exe2and3.title]}>Who We Are</Text>
            </View>
            <View style={styles_exe2and3.greenBox}>
                <Text style={[styles_exe2and3.boxText, styles_exe2and3.title]}>Our People</Text>
            </View>
            <View style={styles_exe2and3.greenBox}>
                <Text style={[styles_exe2and3.boxText, styles_exe2and3.title]}>Our Campus</Text>
            </View>
        </View>
    );
};
const Exe3 = () =>{
    return (
        <View style={styles_exe2and3.parent}>
            <Text style={[styles_exe2and3.child, { backgroundColor: 'powderblue', flex: 1 }]}>Child One</Text>
            <Text style={[styles_exe2and3.child, { backgroundColor: 'skyblue', flex: 1 }]}>Child Two</Text>
            <Text style={[styles_exe2and3.child, { backgroundColor: 'steelblue', flex: 1}]}>Child Three</Text>
        </View>
    );
};
const Exe4 = () =>{
    return (
        <View style={styles_exe4.parent}>
            <View style={[styles_exe4.child, { backgroundColor: 'blue' }]}>
                <Text style={styles_exe4.text}>Square 1</Text>
            </View>
            <View style={[styles_exe4.child, { backgroundColor: 'green' }]}>
                <Text style={styles_exe4.text}>Square 2</Text>
            </View>
            <View style={[styles_exe4.child, { backgroundColor: 'red' }]}>
                <Text style={styles_exe4.text}>Square 3</Text>
            </View>
        </View>
    );
};
const styles_exe2and3 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:50,
    },
    greenBox: {
        width:100,
        height:100 ,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        color: 'black',
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    },
    parent: {
        paddingTop:50,
            flex: 1,
            flexDirection:'row',
            backgroundColor: '#F5FCFF',
            borderColor: '#0099AA',
            borderWidth: 5,
            // justifyContent: 'center',
            // justifyContent: 'space-around',
            // justifyContent: 'flex-end',
            // justifyContent: 'space-between',
    },
    child: {
        width: 100,
            height: 100,
            borderWidth: 2,
            textAlign: 'center',
            fontSize: 24,
            padding: 10,
            borderColor:'black',
    },
});


const styles_exe4 = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    child: {
        width: 80,
        height: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Exe3;