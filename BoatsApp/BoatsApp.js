import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Boat from './components/Boat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: '#c0c0c0',
    borderWidth: 2,
    borderColor: '#555555',
    paddingVertical: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

class AllBoats extends React.Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>GetABoat - For Sale</Text>
          </View>
          <Boat name="SEA RAY 500 SUNDANCER"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                picture={require('./img/sea_ray.jpg')}
                icon_name="ship" icon_color={"#1D3557"}/>
          <Boat name="FOUR WINNS HORIZON 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                picture={require('./img/four_winns.jpg')}
                icon_name="sailboat" icon_color={"#0077B6"}/>
          <Boat name="FLIPPER 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                picture={require('./img/flipper.jpg')}
                icon_name="life-ring" icon_color={"#E63946"}/>
          <Boat name="PRINCESS V48"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                picture={require('./img/princess.jpg')}
                icon_name="anchor" icon_color={"#B8860B"}/>
          <Boat name="BAYLINER 175 BOWRIDER"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                picture={require('./img/bayliner.jpg')}
                icon_name="water" icon_color={"#2A9D8F"}/>
          <Boat name="FAIRLINE TARGA 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                picture={require('./img/fairline.jpg')}
                icon_name="ferry" icon_color={"#F4A261"}/>
        </ScrollView>
    );
  }
}
export default AllBoats;
