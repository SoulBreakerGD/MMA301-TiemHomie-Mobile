import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetailScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 375,
            height: 812,
            backgroundColor: '#f9f9f9',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 354.38,
              height: 319,
              position: 'relative',
              zIndex: 55,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <ImageBackground
              style={{
                width: 335,
                height: 304,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
              }}
              // source={require('./assets/images/d3811148-6464-40b8-9d98-fd650f57ce66.png')}
              resizeMode='cover'
            >
              <ImageBackground
                style={{
                  width: 335,
                  height: 304,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 3,
                }}
                // source={require('./assets/images/b28d1267-1253-45d6-a261-264ab515699a.png')}
                resizeMode='cover'
              >
                <View
                  style={{
                    display: 'flex',
                    width: 295,
                    height: 34,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 7,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 34,
                      height: 34,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 4,
                    }}
                    // source={require('./assets/images/c6a7beb1-7131-422a-afd6-52842a94717b.png')}
                    resizeMode='cover'
                  />
                  <ImageBackground
                    style={{
                      width: 34,
                      height: 34,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 7,
                    }}
                    // source={require('./assets/images/a82a7c1d-9fab-4d91-b32f-1f0fcc2a5894.png')}
                    resizeMode='cover'
                  />
                </View>
                <Text
                  style={{
                    height: 23,
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    fontWeight: '600',
                    lineHeight: 23,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 5,
                    marginTop: 137,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                  numberOfLines={1}
                >
                  Dreamsville House
                </Text>
                <Text
                  style={{
                    height: 14,
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 14,
                    color: '#d4d4d4',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 6,
                    marginTop: 8,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                  numberOfLines={1}
                >
                  Jl. Sultan Iskandar Muda, Jakarta selatan
                </Text>
                <View
                  style={{
                    width: 240,
                    height: 28,
                    position: 'relative',
                    zIndex: 18,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                >
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 18,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 19,
                        marginTop: 2,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                      }}
                      // source={require('./assets/images/778f63b7-1cb2-4849-ab08-bf6bca75437d.png')}
                      resizeMode='cover'
                    />
                  </View>
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      position: 'absolute',
                      top: 0,
                      left: 135,
                      zIndex: 14,
                    }}
                  >
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 11,
                        marginTop: 2,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 2,
                      }}
                    >
                      <View
                        style={{
                          width: 16,
                          height: 15.431,
                          position: 'relative',
                          zIndex: 12,
                          marginTop: 4,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 4,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 13,
                          }}
                          // source={require('./assets/images/65a82ce1-ccde-4ec0-b638-66a5ad2d9f4e.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 14,
                      color: '#d4d4d4',
                      position: 'absolute',
                      top: 7,
                      left: 40,
                      textAlign: 'left',
                      zIndex: 16,
                    }}
                    numberOfLines={1}
                  >
                    6 Bedroom
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 14,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 14,
                      color: '#d4d4d4',
                      position: 'absolute',
                      top: 7,
                      left: 175,
                      textAlign: 'left',
                      zIndex: 9,
                    }}
                    numberOfLines={1}
                  >
                    4 Bathroom
                  </Text>
                </View>
              </ImageBackground>
            </ImageBackground>
            <ImageBackground
              style={{
                width: '6.6%',
                height: '6.27%',
                position: 'absolute',
                top: '65.83%',
                left: '93.4%',
                zIndex: 55,
              }}
              // source={require('./assets/images/dc92d2a1-005f-4366-85c2-b1aa6daab91e.png')}
            />
            <View
              style={{
                width: 295,
                height: 106,
                backgroundColor: '#000000',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                opacity: 0.1,
                position: 'absolute',
                top: 213,
                left: 20,
                zIndex: 1,
              }}
            />
          </View>
          <Text
            style={{
              height: 19,
              fontFamily: 'Roboto',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 18.784,
              color: '#000000',
              position: 'relative',
              textAlign: 'left',
              zIndex: 53,
              marginTop: 5,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
            numberOfLines={1}
          >
            Description
          </Text>
          <Text
            style={{
              width: 335,
              height: 36,
              fontFamily: 'Roboto',
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 18,
              position: 'relative',
              textAlign: 'left',
              zIndex: 54,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 18,
                color: '#848484',
                position: 'relative',
                textAlign: 'left',
              }}
            >
              The 3 level house that has a modern design, has a large pool and a
              garage that fits up to four cars...&nbsp;
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 18,
                position: 'relative',
                textAlign: 'left',
              }}
            >
              Show More
            </Text>
          </Text>
          <View
            style={{
              width: 331,
              height: 40,
              position: 'relative',
              zIndex: 29,
              marginTop: 24,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <ImageBackground
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 29,
              }}
              // source={require('./assets/images/8b6e3f20-7d07-45c0-9f4d-cffab825c4c6.png')}
              resizeMode='cover'
            />
            <View
              style={{
                display: 'flex',
                width: 72,
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 259,
                zIndex: 27,
              }}
            >
              <View
                style={{
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  backgroundColor: 'rgba(10, 142, 217, 0.5)',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  position: 'relative',
                  zIndex: 24,
                }}
              >
                <ImageBackground
                  style={{
                    width: 24,
                    height: 24,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 25,
                    marginTop: 2,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 2,
                  }}
                  // source={require('./assets/images/f47fba2d-0b3d-42d5-9bc8-4c88345efcb2.png')}
                  resizeMode='cover'
                />
              </View>
              <View
                style={{
                  width: 28,
                  height: 28,
                  flexShrink: 0,
                  backgroundColor: 'rgba(10, 142, 217, 0.5)',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  position: 'relative',
                  zIndex: 27,
                }}
              >
                <ImageBackground
                  style={{
                    width: 24,
                    height: 24,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 28,
                    marginTop: 2,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 2,
                  }}
                  // source={require('./assets/images/7705780d-7501-4334-86b7-f08fec94cb98.png')}
                  resizeMode='cover'
                />
              </View>
            </View>
            <Text
              style={{
                display: 'flex',
                height: 19,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 18.784,
                color: '#000000',
                position: 'absolute',
                top: 2,
                left: 56,
                textAlign: 'left',
                zIndex: 21,
              }}
              numberOfLines={1}
            >
              Garry Allen
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 14,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 14,
                color: '#848484',
                position: 'absolute',
                top: 25,
                left: 56,
                textAlign: 'left',
                zIndex: 22,
              }}
              numberOfLines={1}
            >
              Owner
            </Text>
          </View>
          <Text
            style={{
              height: 19,
              fontFamily: 'Roboto',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 18.784,
              color: '#000000',
              position: 'relative',
              textAlign: 'left',
              zIndex: 38,
              marginTop: 32,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
            numberOfLines={1}
          >
            Gallery
          </Text>
          <View
            style={{
              display: 'flex',
              width: 336,
              height: 72,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 35,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <ImageBackground
              style={{
                width: 72,
                height: 72,
                flexShrink: 0,
                position: 'relative',
                zIndex: 31,
              }}
              // source={require('./assets/images/8c8e42ef-6b0d-4eab-92e6-9dcaba86a839.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: 72,
                height: 72,
                flexShrink: 0,
                position: 'relative',
                zIndex: 32,
              }}
              // source={require('./assets/images/92e3ea08-448c-4736-9b35-4385bceae710.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: 72,
                height: 72,
                flexShrink: 0,
                position: 'relative',
                zIndex: 33,
              }}
              // source={require('./assets/images/43853415-c37c-43be-97b0-9b49a075b415.png')}
              resizeMode='cover'
            />
            <ImageBackground
              style={{
                width: 72,
                height: 72,
                flexShrink: 0,
                position: 'relative',
                zIndex: 35,
              }}
              // source={require('./assets/images/36108e18-3d17-4b53-accb-c48358cc7020.png')}
              resizeMode='cover'
            >
              <View
                style={{
                  width: 72,
                  height: 72,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 36,
                }}
              >
                <Text
                  style={{
                    display: 'flex',
                    height: 23,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    fontWeight: '500',
                    lineHeight: 23,
                    color: '#ffffff',
                    position: 'absolute',
                    top: 25,
                    left: 26,
                    textAlign: 'left',
                    zIndex: 37,
                  }}
                  numberOfLines={1}
                >
                  +5
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              width: 335,
              height: 150,
              position: 'relative',
              zIndex: 40,
              marginTop: 34,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                width: 417,
                height: 393.536,
                position: 'absolute',
                top: -103.693,
                left: 0,
                zIndex: 41,
              }}
            >
              <ImageBackground
                style={{
                  width: 15.643,
                  height: 15.643,
                  position: 'relative',
                  zIndex: 44,
                  marginTop: 149.693,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 236,
                }}
                // source={require('./assets/images/b52eb295-1ff2-4c1a-98fa-67ea7411f5c8.png')}
                resizeMode='cover'
              />
              <View
                style={{
                  width: 417,
                  height: 393.536,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 42,
                }}
              >
                <ImageBackground
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 43,
                  }}
                  // source={require('./assets/images/10274c96-aa03-4549-ba2f-5a7589cfd065.png')}
                />
              </View>
            </View>
            <LinearGradient
              colors={['#9fd9fa', '#098dd8']}
              useAngle={true}
              angle={180}
              style={{
                display: 'flex',
                width: 122,
                height: 43,
                paddingTop: 12,
                paddingRight: 24,
                paddingBottom: 12,
                paddingLeft: 24,
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                position: 'absolute',
                top: 79,
                left: 213,
                overflow: 'hidden',
                zIndex: 47,
              }}
            >
              <Text
                style={{
                  height: 19,
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Roboto',
                  fontSize: 16,
                  fontWeight: '600',
                  lineHeight: 18.784,
                  color: '#ffffff',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 48,
                }}
                numberOfLines={1}
              >
                Rent Now
              </Text>
            </LinearGradient>
            <Text
              style={{
                display: 'flex',
                height: 14,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 14,
                color: '#848484',
                position: 'absolute',
                top: 80,
                left: 0,
                textAlign: 'left',
                zIndex: 51,
              }}
              numberOfLines={1}
            >
              Price
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 19,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Roboto',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 18.784,
                color: '#000000',
                position: 'absolute',
                top: 102,
                left: 0,
                textAlign: 'left',
                zIndex: 50,
              }}
              numberOfLines={1}
            >
              Rp. 2.500.000.000 / Year
            </Text>
            <ImageBackground
              style={{
                width: 92,
                height: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                position: 'absolute',
                top: 109,
                left: 230,
                zIndex: 46,
              }}
              // source={require('./assets/images/3661ac17-db96-4255-89c8-9f3790462e54.png')}
              resizeMode='cover'
            />
          </View>
          <ImageBackground
            style={{
              width: 375,
              height: 161,
              position: 'absolute',
              top: 658,
              left: 0,
              zIndex: 45,
            }}
            // source={require('./assets/images/95ecedbe-cbd8-4c76-8c30-eeabc5067f04.png')}
            resizeMode='cover'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}