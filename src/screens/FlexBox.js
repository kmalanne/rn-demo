import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexBox extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          // flexDirection: 'column',
          // justifyContent: 'center', // Horizontal distribution
          // alignItems: 'center', // Vertical distribution
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: 'lightgreen' }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'limegreen' }} />
        <View
          style={{ width: 50, height: 50, backgroundColor: 'forestgreen' }}
        />
      </View>
    );
  }
}

// export default class FlexBox extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View
//           style={{ flex: 1, backgroundColor: 'lightgreen' }}
//         />
//         <View style={{ flex: 2, backgroundColor: 'limegreen' }} />
//         <View
//           style={{ flex: 3, backgroundColor: 'forestgreen' }}
//         />
//       </View>
//     );
//   }
// }
