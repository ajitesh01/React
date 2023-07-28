import React from "react";
import  ReactDOM  from "react-dom/client";
/*
Header
    -logo
    -nav item(home,about us)
Body
    -search
    -Restro Container
    -Restro Card
Footer
    -Copyright
    -link
*/
const resObj=[
    {
        "info": {
          "id": "23847",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
          "locality": "Rest House Road",
          "areaName": "Brigade Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "23847",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "2456",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹699",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "5938",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Tasker Town",
          "areaName": "Shivaji Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "5938",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "166",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-29 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ ₹129"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "43836",
          "name": "McDonald's",
          "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
          "locality": "MG Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "43836",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "630",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-29 02:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹999",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "30959",
          "name": "KFC",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "locality": "Garuda Mall",
          "areaName": "Magrath Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "30959",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "547",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-garuda-mall-magrath-road-bangalore-30959",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "426730",
          "name": "Theobroma",
          "cloudinaryImageId": "o77uezd0iftxb1czbnla",
          "locality": "Vittal Malya Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Desserts",
            "Bakery",
            "Beverages"
          ],
          "avgRating": 4.5,
          "feeDetails": {
            "restaurantId": "426730",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "1040",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 0.3,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "0.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/theobroma-vittal-malya-road-ashok-nagar-bangalore-426730",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "405396",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "cloudinaryImageId": "mqupo23ie7osnyf783yo",
          "locality": "ANK Rao Road",
          "areaName": "Basavanagudi",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
          ],
          "avgRating": 4.5,
          "veg": true,
          "feeDetails": {
            "restaurantId": "405396",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3300
          },
          "parentId": "582",
          "avgRatingString": "4.5",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-ank-rao-road-basavanagudi-bangalore-405396",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "435405",
          "name": "Chaayos Chai+Snacks=Relax",
          "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
          "locality": "Vasanth Nagar",
          "areaName": "Cunningham Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Beverages",
            "Chaat",
            "Desserts",
            "Home Food",
            "Italian",
            "Maharashtrian",
            "Snacks",
            "Street Food",
            "Sweets"
          ],
          "avgRating": 4.4,
          "feeDetails": {
            "restaurantId": "435405",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3300
          },
          "parentId": "281782",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "36 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 23:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-vasanth-nagar-cunningham-road-bangalore-435405",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "69876",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "UB City",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Fast Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "69876",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "2",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 0.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "0.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-ub-city-ashok-nagar-bangalore-69876",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "3369",
          "name": "Truffles",
          "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
          "locality": "Ashok Nagar",
          "areaName": "St Marks Road",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "American",
            "Desserts",
            "Continental",
            "Italian"
          ],
          "avgRating": 4.5,
          "feeDetails": {
            "restaurantId": "3369",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "218065",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 0.8,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "0.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
                          
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/truffles-ashok-nagar-st-marks-road-bangalore-3369",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
          "info": {
            "id": "23847",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
            "locality": "Rest House Road",
            "areaName": "Brigade Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "23847",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2700
            },
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-07-28 22:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹699",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
          },
          "analytics": {
            "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
    {
      "info": {
        "id": "23847",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
        "locality": "Rest House Road",
        "areaName": "Brigade Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "23847",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "2456",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-28 22:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "5938",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Tasker Town",
        "areaName": "Shivaji Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "5938",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-29 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "EVERY ITEM",
          "subHeader": "@ ₹129"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "43836",
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "MG Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "43836",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "630",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-29 02:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "30959",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Garuda Mall",
        "areaName": "Magrath Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "30959",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "547",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-28 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-garuda-mall-magrath-road-bangalore-30959",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "426730",
        "name": "Theobroma",
        "cloudinaryImageId": "o77uezd0iftxb1czbnla",
        "locality": "Vittal Malya Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Beverages"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "426730",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "1040",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/theobroma-vittal-malya-road-ashok-nagar-bangalore-426730",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "405396",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "mqupo23ie7osnyf783yo",
        "locality": "ANK Rao Road",
        "areaName": "Basavanagudi",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.5,
        "veg": true,
        "feeDetails": {
          "restaurantId": "405396",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "582",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-28 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-ank-rao-road-basavanagudi-bangalore-405396",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "435405",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
        "locality": "Vasanth Nagar",
        "areaName": "Cunningham Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "435405",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "281782",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "36 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-28 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-vasanth-nagar-cunningham-road-bangalore-435405",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "69876",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "UB City",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Fast Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "69876",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-28 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-ub-city-ashok-nagar-bangalore-69876",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "3369",
        "name": "Truffles",
        "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
        "locality": "Ashok Nagar",
        "areaName": "St Marks Road",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "American",
          "Desserts",
          "Continental",
          "Italian"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "3369",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "218065",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-28 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
                        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
      },
      "analytics": {
        "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/truffles-ashok-nagar-st-marks-road-bangalore-3369",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
          "id": "23847",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
          "locality": "Rest House Road",
          "areaName": "Brigade Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "23847",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "2456",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹699",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {
          "context": "seo-data-ba4fdb88-0874-432d-861e-3504755097de"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
  ];
  //console.log(resObj);
const ResturentCard=(props)=>{
    const {resData}=props;
    console.log(resData.info);

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+resData.info.cloudinaryImageId
}/>
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.areaName}</h3>
            <h3>{resData.info.avgRating}</h3>
           <h3>{resData.info.cuisines.join(',')
}</h3>
        </div>
    );
};
const Body = ()=>{
    return(
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resObj.map((resturent,index)=>(
                <ResturentCard key={index} resData={resturent}/>
            ))}
       
        </div>
        </div>
    );
};
const Header = ()=>{
//logo
//nav item
return (
    <div className="header">
        <div className="logo">
            <img src="data:image/png;base64,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"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

        </div>
    </div>
);
};
const AppLayout= ()=>{
    return (
    <div className="app">
        <Header/>
        <Body/>
       
    </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
