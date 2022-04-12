import React from 'react';
import {View, Text, Image} from 'react-native';
import { HomeStyles } from '../styles/HomeStyles';

const BodyHome = () => {
    return(
        <View style={HomeStyles.bodyContainer}>
                <View style={HomeStyles.bodyCard}>
                    <Image source={require('../../assets/imageHome1.png')} alt='astronaut-with-flag' style={HomeStyles.imagesBody}/>
                    <Text style={HomeStyles.titleBodyCard}>Lorem ipsum dolor sit amet, consectetur</Text>
                    <Text style={HomeStyles.textBodyCard}>Proin turpis mauris elementum adipiscing leo. At mauris pellentesque eget imperdiet. Porttitor aliquet iaculis sed arcu diam et, sit. Cras ut proin quis consequat fringilla orci, velit, quis. Malesuada tellus facilisi odio lectus blandit morbi risus. Quis mattis proin pretium accumsan, scelerisque luctus.nulla. Vitae est duis vitae lacus, purus molestie tellus. Feugiat odio varius ullamcorper pulvinar sagittis sed vulputate quis. Odio urna, id amet quam interdum elementum sed. Senectus sollicitudin tortor, mi, a quis</Text>
                </View>
                <View style={HomeStyles.bodyCard}>
                    <Image source={require('../../assets/imageHome2.png')} alt='astronaut-with-flag' style={HomeStyles.imagesBody}/>
                    <Text style={HomeStyles.titleBodyCard}>Lorem ipsum dolor sit amet, consectetur</Text>
                    <Text style={HomeStyles.textBodyCard}>Proin turpis mauris elementum adipiscing leo. At mauris pellentesque eget imperdiet. Porttitor aliquet iaculis sed arcu diam et, sit. Cras ut proin quis consequat fringilla orci, velit, quis. Malesuada tellus facilisi odio lectus blandit morbi risus. Quis mattis proin pretium accumsan, scelerisque luctus.nulla. Vitae est duis vitae lacus, purus molestie tellus. Feugiat odio varius ullamcorper pulvinar sagittis sed vulputate quis. Odio urna, id amet quam interdum elementum sed. Senectus sollicitudin tortor, mi, a quis</Text>
                </View>
                
        </View>
    );
}
export default BodyHome;