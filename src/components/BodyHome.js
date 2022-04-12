import React from 'react';
import {View, Text, Image} from 'react-native';
import { HomeStyles } from '../styles/HomeStyles';

const BodyHome = () => {
    return(
        <View style={HomeStyles.bodyContainer}>
            <View style={HomeStyles.bodyContainer}>
                <Image source={require('../../assets/imageHome1.png')} alt='astronaut-with-flag' style={HomeStyles.astronautImage}/>
                <View style={HomeStyles.bodyContainer}>
                    <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                    <Text>Proin turpis mauris elementum adipiscing leo. At mauris pellentesque eget imperdiet. Porttitor aliquet iaculis sed arcu diam et, sit. Cras ut proin quis consequat fringilla orci, velit, quis. Malesuada tellus facilisi odio lectus blandit morbi risus. Quis mattis proin pretium accumsan, scelerisque luctus.nulla. Vitae est duis vitae lacus, purus molestie tellus. Feugiat odio varius ullamcorper pulvinar sagittis sed vulputate quis. Odio urna, id amet quam interdum elementum sed. Senectus sollicitudin tortor, mi, a quis</Text>
                </View>
            </View>
            <View style={HomeStyles.bodyContainer}>
                <Image source={require('../../assets/imageHome2.png')} alt='astronaut-with-flag' style={HomeStyles.astronautImage}/>
                <View style={HomeStyles.bodyContainer}>
                    <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                    <Text>Proin turpis mauris elementum adipiscing leo. At mauris pellentesque eget imperdiet. Porttitor aliquet iaculis sed arcu diam et, sit. Cras ut proin quis consequat fringilla orci, velit, quis. Malesuada tellus facilisi odio lectus blandit morbi risus. Quis mattis proin pretium accumsan, scelerisque luctus.nulla. Vitae est duis vitae lacus, purus molestie tellus. Feugiat odio varius ullamcorper pulvinar sagittis sed vulputate quis. Odio urna, id amet quam interdum elementum sed. Senectus sollicitudin tortor, mi, a quis</Text>
                </View>
            </View>
        </View>
    );
}
export default BodyHome;