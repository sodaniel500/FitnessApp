import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', marginTop: 25 }}>
        <Image
          source={require('../../assets/image.png')}
          style={styles.image}
        />
      </View>

      <View style={{ marginTop: 50 }}>
        <Text style={styles.text}>Let's get</Text>
        <Text style={styles.text}>to know you!</Text>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.txt}>Find the most suitable meal plan</Text>
          <Text style={styles.txt}>for our healthy needs</Text>
        </View>
      </View>


      <View style={styles.textInput}>

        <View style={{ left: 10 }}>
          <AntDesign name="checkcircleo" size={15} color="#BA55D3"
            style={{}} />
        </View>

        <View>
          <TextInput
            placeholder='Name'
            style={styles.input}
          />
        </View>

      </View>


      <View style={styles.textInputs}>

        <View style={{ left: 10 }}>
          <AntDesign name="checkcircleo" size={15} color="#BA55D3"
            style={{}} />
        </View>

        <View>
          <TextInput
            placeholder='Gender'
            style={styles.input}
          />
        </View>

      </View>

      
      <View style={styles.textInputss}>
        <View style={{ left: 10 }}>
          <AntDesign name="checkcircleo" size={15} color="#BA55D3"
            style={{}} />
        </View>

        <View>
          <TextInput
            placeholder='Age'
            style={styles.input}
          />
        </View>
      </View>

      
      <View style={styles.bttn}>
        <Text style={styles.level}>Activitiy Level</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
          <TouchableOpacity>
          <Text style={styles.emoji}>😒</Text>
          <Text style={{color: 'white', marginTop: 5}}>Inactive</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.emoji}>💪</Text>
          <Text style={{color: 'white', marginTop: 5}}>Active</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.emoji}>🔥</Text>
          <Text style={{color: 'white', marginTop: 5}}>V Active</Text>
          </TouchableOpacity>

          </View>
      </View>
      
      <TouchableOpacity style={styles.n}
      // onPress={() => navigation.navigate() }
      >
        <Text style={styles.txxt}>Show My Plans</Text>
      </TouchableOpacity>

    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDA0DD',
    padding: 30
  },
  image: {
    marginLeft: 150,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  txt: {
    color: 'white'
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 15
  },
  input: {
    marginVertical: 35,
    backgroundColor: "rgba(255,255,255, 0.8)",
    height: 45,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginHorizontal: 30,
    width: 230
  },
  textInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 68
  },
  textInputss: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 120
  },
  bttn:{
    backgroundColor: '#18181b99',
    borderRadius: 19,
    paddingVertical: 25,
    paddingHorizontal: 20,
    bottom: 130
  },
  level: {
    alignSelf: 'center',
    color: 'white',
    bottom: 13
  },
  emoji: {
    backgroundColor:  "rgba(255,255,255, 0.4)",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  n: {
    backgroundColor: '#FF7F50',
    bottom: 110,
    alignItems: 'center',
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 12,
  
  },
  txxt: {
  }
})
