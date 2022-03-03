import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [camera, setCamera] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [img, setImg] = useState(null);
  
  const capture = async () => {
    if (camera) {
    	const data = await camera.takePictureAsync(null);
        setImg(data.url);
    }
  }
  const turn = () => {
    let _type = type === Camera.Constants.Type.back ? 
                         Camera.Constants.Type.front : 
                         Camera.Constants.Type.back;
    setType(_type);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;
  
  return (
    <View style={styles.container}>
      <Camera ref={(ref)=> setCamera(ref)} style={styles.camera} type={type}>
        <View>
          <View />
          <View />
        </View>
        <View style={styles.footer}>
          <View style={styles.directionButton} />
          <TouchableOpacity style={styles.button} onPress={capture}>
            <View style={styles.buttonInCircle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.directionButton} onPress={turn}>
            <Ionicons name='reload' size={24} color='#aaa' />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footer: {
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 100,
  },
  buttonInCircle: {
    width: '86%',
    height: '86%',
    borderRadius: 100,
    borderColor: '#eee',
    borderWidth: 2,
  },
  directionButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});