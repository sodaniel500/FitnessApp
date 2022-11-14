export default [
    {
        id: '1',
        image: require('./assets/SS.jpg')
    },
    {
        id: '2',
        image: require('./assets/SS2.jpg')
    },
    {
        id: '3',
        title: 'Lets Achieve Your Desired Body Shape',
        discription: 'Track your daily activities, burned calories and achieve your Goals',
        image: require('./assets/onBoarding.jpg')
    }
]




// <Image source={require('../../assets/SS.jpg')}
// style={{ width: 360, height: 615, }} />

// <View>

// <Image source={require('../../assets/SS2.jpg')}
//   style={{ width: 360, height: 615 }}/>

// <TouchableOpacity style={{zIndex:1}}
//   onPress={() => navigation.navigate('DetailsScreen')}>
    
//   <Text>Let's Begin</Text>

//   <MaterialIcons
//     name="arrow-forward-ios"
//     size={22} color='white'
//   />

 // <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//  <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
//  <View style={{ flex: 3}}>
//    <FlatList
//      data={Slides}
//      renderItem={({ item }) => <OnboardItem item={item} />}
//      horizontal
//      showsHorizontalScrollIndicator
//      pagingEnabled
//      bounces={false}
//      keyExtractor={(item => item.id)}
//    />
// <Image source={require('../../assets/SS.jpg')}
//            style={{ width: 360, height: 615, }} />
//  </View>
// </View>
// // </SafeAreaView>