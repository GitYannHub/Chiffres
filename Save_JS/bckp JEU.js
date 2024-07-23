
<View style={styles.contenairLine}>
<View style={styles.line1}>
<View style={styles.element}>
<TouchableOpacity disabled={disabled0} onPress={ () => {handlePressSound(0)}} style={styles.containerImage}>
 <Image
    source= {Constants.data[dataSelected[0]]["url"]}
    style={styles.imageStyle}
  />
</TouchableOpacity> 
</View>

<View style={styles.element}>
<TouchableOpacity disabled={disabled1} onPress={ () => {handlePressSound(1)}} style={styles.containerImage}>
 <Image
    source= {Constants.data[dataSelected[1]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 
  </View>
  </View>

  <View style={styles.line1}>
  <View style={styles.element}>
  <TouchableOpacity disabled={disabled2} onPress={ () => {handlePressSound(2)}} style={styles.containerImage}>
<Image
    source= {Constants.data[dataSelected[2]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 
  </View>

  <View style={styles.element}>
  <TouchableOpacity disabled={disabled3} onPress={ () => {handlePressSound(3)}} style={styles.containerImage}>
<Image
    source= {Constants.data[dataSelected[3]]["url"]}
    style={styles.imageStyle}
  />
  </TouchableOpacity> 
  </View>
  </View>
  </View>
