export const json = {
  form: {
    id: 'fotocasa-insert',
    type: 'group',
    label: 'Publish your ad',
    actionlabel: 'Next',
    fields: [
      {
        id: 'images',
        type: 'images',
        label: 'Add your photos. You can upload several at the same time',
        hint: 'Add your photos. You can upload several at the same time',
        display: 'image',
        constraints: [
          {property: {maxsize: '30'}, message: 'You can upload up to 30 photos'}
        ]
      },
      {
        id: 'propertyTypeId',
        label: 'Type of property',
        value: '2',
        type: 'picker',
        datalist: [
          {value: '2', text: 'Home'},
          {value: '3', text: 'Garage'},
          {value: '4', text: 'Land'},
          {value: '5', text: 'Commercial premises'},
          {value: '6', text: 'Office'},
          {value: '7', text: 'Box room'}
        ]
      },
      {
        id: 'propertySubTypeId',
        label: 'Home type',
        type: 'picker',
        value: '1',
        datalist: [
          {value: '1', text: 'flat'},
          {value: '2', text: 'Apartment'},
          {value: '6', text: 'Áttic'},
          {value: '7', text: 'Duplex'},
          {value: '54', text: 'Studio'},
          {value: '8', text: 'Loft'},
          {value: '3', text: 'Detached house with garden'},
          {value: '52', text: 'Ground floor'},
          {value: '9', text: 'Country property'},
          {value: '5', text: 'Terraced house'}
        ]
      },
      {
        id: 'transactionTypeId',
        type: 'picker',
        value: '1',
        display: 'button',
        datalist: [
          {value: '1', text: 'Sale'},
          {value: '3', text: 'Rent'},
          {value: '5', text: 'Share'},
          {value: '8', text: 'Holiday rental'}
        ]
      },
      {
        id: 'tourismRegister',
        type: 'text',
        label: 'Enter the tourist registration',
        hint: 'Enter the tourist registration',
        hidden: true,
        required: true,
        constraints: [
          {property: {notnull: ''}, message: 'Required field'},
          {
            property: {pattern: '^[a-zA-Z0-9]*$'},
            message: 'Is not a valid registration'
          },
          {
            property: {minlength: '8'},
            message: 'It should contains 8 characters at least'
          },
          {
            property: {maxlength: '15'},
            message: 'Its maximum size is 15 characters'
          }
        ]
      },
      {
        id: 'rentPeriodicityIds',
        type: 'multipicker',
        label: 'Frequency',
        hint: 'Frequency',
        value: '2',
        display: 'button',
        hidden: true,
        datalist: [
          {value: '1', text: 'Daily'},
          {value: '2', text: 'Weekly'},
          {value: '3', text: 'Monthly'}
        ]
      },
      {
        id: 'priceDaily',
        type: 'numeric',
        label: 'Daily price',
        hint: 'Daily price',
        display: 'money',
        hidden: true
      },
      {
        id: 'priceWeekly',
        type: 'numeric',
        label: 'Weekly price',
        hint: 'Weekly price',
        display: 'money',
        hidden: true
      },
      {
        id: 'priceMonthly',
        type: 'numeric',
        label: 'Monthly price',
        hint: 'Monthly price',
        display: 'money',
        hidden: true
      },
      {
        id: 'priceSale',
        type: 'numeric',
        label: 'Selling Price',
        hint: 'Selling Price',
        display: 'money'
      },
      {
        id: 'priceRent',
        type: 'numeric',
        hidden: true,
        label: 'Price to rent',
        hint: 'Price to rent',
        display: 'money'
      },
      {
        id: 'includesCommunityFees',
        hidden: true,
        type: 'picker',
        display: 'switch',
        label: 'Community rates included in the price'
      },
      {
        id: 'requiresLessThanTwoMonthsDeposit',
        type: 'picker',
        display: 'switch',
        hidden: true,
        label: 'Less than two months’ security deposit required'
      },
      {
        id: 'surface',
        label: 'Floor Area',
        hint: 'Floor Area',
        type: 'numeric',
        display: 'surface'
      },
      {
        id: 'surfaceLand',
        label: 'Land',
        hint: 'Land',
        type: 'numeric',
        display: 'surface',
        hidden: true
      },
      {
        id: 'propertySubTypeLandId',
        label: 'Type of floor',
        type: 'picker',
        value: '14',
        hidden: true,
        datalist: [
          {value: '58', text: 'Residential land'},
          {value: '59', text: 'Development land'},
          {value: '13', text: 'Industrial land'},
          {value: '60', text: 'Non-Development land'},
          {value: '14', text: 'Land'}
        ]
      },
      {
        id: 'location',
        type: 'map',
        label: 'Street, number and City',
        hint: 'Street, number and City',
        required: true,
        constraints: [{property: {notnull: ''}, message: 'Required field'}]
      },
      {
        id: 'hideLocation',
        type: 'picker',
        display: 'switch',
        label: 'Hide Address'
      },
      {
        id: 'rooms',
        label: 'Rooms',
        value: '2',
        type: 'picker',
        display: 'stepper',
        datalist: [
          {value: '1', text: '1 room'},
          {value: '2', text: '2 rooms'},
          {value: '3', text: '3 rooms'},
          {value: '4', text: '4 rooms'},
          {value: '5', text: '5 rooms'},
          {value: '6', text: '6 rooms'},
          {value: '7', text: '7 rooms'},
          {value: '8', text: '8 rooms'},
          {value: '9', text: '9 rooms'},
          {value: '10', text: '10 rooms'}
        ]
      },
      {
        id: 'bathrooms',
        label: 'Bathrooms',
        type: 'picker',
        value: '1',
        display: 'stepper',
        datalist: [
          {value: '1', text: '1 bathroom'},
          {value: '2', text: '2 bathrooms'},
          {value: '3', text: '3 bathrooms'},
          {value: '4', text: '4 bathrooms'},
          {value: '5', text: '5 bathrooms'},
          {value: '6', text: '6 bathrooms'},
          {value: '7', text: '7 bathrooms'},
          {value: '8', text: '8 bathrooms'},
          {value: '9', text: '9 bathrooms'},
          {value: '10', text: '10 bathrooms'}
        ]
      },
      {
        id: 'isIndustrialBuilding',
        label: 'Industrial Building',
        hidden: true,
        type: 'picker',
        display: 'switch'
      },
      {
        id: 'energyCertificateGroup',
        type: 'fieldset',
        display: 'inline',
        label: 'Energy certificate',
        fields: [
          {
            id: 'energyEfficiencyRating',
            label: 'Consumption efficiency scale',
            hint: 'Select a scale of efficiency of consumption',
            type: 'picker',
            required: true,
            tooltip: {
              label: 'How I fill these data?',
              title: 'What is the energy certificate',
              image: 'https://frtassets.fotocasa.es/img/como-rellenar-datos.jpg'
            },
            datalist: [
              {value: '1', text: 'A'},
              {value: '2', text: 'B'},
              {value: '3', text: 'C'},
              {value: '4', text: 'D'},
              {value: '5', text: 'E'},
              {value: '6', text: 'F'},
              {value: '7', text: 'G'}
            ],
            constraints: [
              {
                property: {notnull: ''},
                message:
                  'We need a valid value for the consumption efficiency scale'
              }
            ]
          },
          {
            id: 'energyEfficiencyValue',
            label: 'Consumption efficiency value',
            hint: 'Select a consumption efficiency value',
            type: 'text',
            required: true,
            constraints: [
              {
                property: {notnull: ''},
                message: 'We need a valid value of consumption efficiency'
              },
              {
                property: {pattern: '^\\d*[\\.\\,]?\\d*$'},
                message: 'It is not a valid format'
              }
            ]
          },
          {
            id: 'environmentImpactRating',
            label: 'Scale efficiency emissions',
            hint: 'Select an emissions efficiency scale',
            type: 'picker',
            required: true,
            datalist: [
              {value: '1', text: 'A'},
              {value: '2', text: 'B'},
              {value: '3', text: 'C'},
              {value: '4', text: 'D'},
              {value: '5', text: 'E'},
              {value: '6', text: 'F'},
              {value: '7', text: 'G'}
            ],
            constraints: [
              {
                property: {notnull: ''},
                message:
                  'We need a valid value for the emission efficiency scale'
              }
            ]
          },
          {
            id: 'environmentImpactValue',
            label: 'Emission efficiency value',
            hint: 'Select an emission efficiency value',
            type: 'text',
            required: true,
            constraints: [
              {
                property: {notnull: ''},
                message: 'We need a valid emission efficiency value'
              },
              {
                property: {pattern: '^\\d*[\\.\\,]?\\d*$'},
                message: 'It is not a valid format'
              }
            ]
          }
        ]
      },
      {
        id: 'description',
        type: 'text',
        display: 'multiline',
        label: 'Description',
        hint: 'Description'
      },
      {
        id: 'extrasBuilding',
        label: 'Building extras',
        type: 'multipicker',
        display: 'button',
        datalist: [
          {value: '5', text: 'Private Garage'},
          {value: '11', text: 'Box room'},
          {value: '13', text: 'Lift'},
          {value: '26', text: 'Communal parking'},
          {value: '28', text: 'Concierge service'},
          {value: '81', text: 'Camera intercom'}
        ]
      },
      {
        id: 'extrasParking',
        type: 'multipicker',
        display: 'button',
        label: 'Parking Extras',
        hidden: true,
        datalist: [
          {value: '98', text: 'Automatic door'},
          {value: '99', text: 'Private Surveillance'}
        ]
      },
      {
        id: 'extrasBusiness',
        type: 'multipicker',
        display: 'button',
        hidden: true,
        datalist: [
          {value: '100', text: 'Smoke vent'},
          {value: '101', text: 'Hot water'}
        ]
      },
      {
        id: 'extrasBoxroom',
        label: 'Box room extras',
        type: 'multipicker',
        display: 'button',
        hidden: true,
        datalist: [
          {value: '85', text: '24-hour CCTV video surveillance system'},
          {value: '86', text: 'Personal access code to enter the box room'},
          {value: '87', text: 'Individual alarm in box room'},
          {value: '88', text: '24-hour access every day of the year'},
          {value: '89', text: 'Free parking'},
          {value: '90', text: 'Loading/unloading area'},
          {value: '91', text: 'Moving service with free van'},
          {value: '92', text: 'Free inside transport equipment'}
        ]
      },
      {
        id: 'extrasInside',
        label: 'Basic extras',
        type: 'multipicker',
        display: 'button',
        datalist: [
          {value: '1', text: 'Air conditioning'},
          {value: '2', text: 'Cupboards'},
          {value: '3', text: 'Heating'},
          {value: '9', text: 'Parquet flooring'},
          {value: '15', text: 'Kitchen/breakfast room'},
          {value: '18', text: 'Suite - bathroom included'},
          {value: '19', text: 'Furnished'},
          {value: '21', text: 'Electrical appliances'},
          {value: '22', text: 'Owen'},
          {value: '23', text: 'Washing machine'},
          {value: '24', text: 'Microwave'},
          {value: '25', text: 'Refrigerator'},
          {value: '29', text: 'TV'},
          {value: '52', text: 'Internet'},
          {value: '84', text: 'Security door'},
          {value: '109', text: 'Laundry room'},
          {value: '130', text: 'Unfurnished'}
        ]
      },
      {
        id: 'extrasOutside',
        type: 'multipicker',
        label: 'Other extras',
        display: 'button',
        datalist: [
          {value: '7', text: 'Garden'},
          {value: '10', text: 'Terrace'},
          {value: '12', text: 'Communal area'},
          {value: '16', text: 'Patio'},
          {value: '17', text: 'Swimming pool'},
          {value: '32', text: 'Balcony'},
          {value: '82', text: 'Sports area'},
          {value: '83', text: "Children's play area"},
          {value: '94', text: 'Community swimming pool'}
        ]
      },
      {
        id: 'extrasDeluxe',
        type: 'multipicker',
        display: 'button',
        hidden: true,
        label: 'Luxury extras',
        datalist: [
          {value: '36', text: 'Jacuzzi'},
          {value: '42', text: 'Gym'},
          {value: '56', text: 'Cellar'},
          {value: '62', text: 'Sauna'},
          {value: '70', text: 'Tennis court'},
          {value: '77', text: 'Alarm'},
          {value: '119', text: 'Indoor lift'},
          {value: '122', text: 'Guest bathroom'},
          {value: '123', text: 'Guest house'},
          {value: '124', text: 'Laundry room'},
          {value: '125', text: 'Service room'},
          {value: '126', text: 'Designer furniture'},
          {value: '127', text: 'Piped music'},
          {value: '128', text: 'Covered porch'},
          {value: '129', text: 'Cinema'}
        ]
      },
      {
        id: 'extrasSharing',
        type: 'multipicker',
        label: 'Sharing extras',
        display: 'button',
        hidden: true,
        datalist: [
          {value: '95', text: 'Only girls'},
          {value: '96', text: 'Only boys'},
          {value: '97', text: 'Non smoking'}
        ]
      },
      {
        id: 'shouldSendToHabitaclia',
        type: 'picker',
        display: 'switch',
        label: 'I want my ad to be published for free in Habitaclia',
        value: 'true'
      },
      {
        id: 'shouldSendToVibbo',
        type: 'picker',
        display: 'switch',
        label: 'Publish it also in vibbo.com for selling it faster',
        value: 'true'
      },
      {
        id: 'requiresProfessionalServices',
        type: 'picker',
        display: 'switch',
        required: true,
        datalist: [
          {
            value: 'true',
            text:
              'I want to double my business possibilities with the help of a property professional'
          },
          {value: 'false', text: 'No, perhaps another time'}
        ],
        constraints: [{property: {notnull: ''}, message: 'Required field'}]
      }
    ],
    rules: {
      propertySubTypeId: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      transactionTypeId: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2']}],
          then: {
            data: {
              value: '1',
              datalist: [
                {value: '1', text: 'Sale'},
                {value: '3', text: 'Rent'},
                {value: '5', text: 'Share'},
                {value: '8', text: 'Holiday rental'}
              ]
            }
          }
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['3', '6', '7']}
          ],
          then: {
            data: {
              value: '3',
              datalist: [
                {value: '1', text: 'Sale'},
                {value: '3', text: 'Rent'}
              ]
            }
          }
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['4']}],
          then: {data: {value: '1', datalist: [{value: '1', text: 'Sale'}]}}
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['5']}],
          then: {
            data: {
              value: '3',
              datalist: [
                {value: '1', text: 'Sale'},
                {value: '3', text: 'Rent'},
                {value: '4', text: 'Transfer'}
              ]
            }
          }
        }
      ],
      tourismRegister: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']}
          ],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'transactionTypeId', value: ['8']}
          ],
          then: {data: {hidden: true, required: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true, required: false}}
        }
      ],
      rentPeriodicityIds: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']}
          ],
          then: {data: {required: true, hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'transactionTypeId', value: ['8']}
          ],
          then: {data: {required: false, hidden: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {required: false, hidden: true}}
        }
      ],
      priceDaily: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']},
            {operator: 'SUPERSET', id: 'rentPeriodicityIds', value: ['1']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']},
            {operator: 'NSUPERSET', id: 'rentPeriodicityIds', value: ['1']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'transactionTypeId', value: ['8']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      priceWeekly: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']},
            {operator: 'SUPERSET', id: 'rentPeriodicityIds', value: ['2']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']},
            {operator: 'NSUPERSET', id: 'rentPeriodicityIds', value: ['2']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'transactionTypeId', value: ['8']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      priceMonthly: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']},
            {operator: 'SUPERSET', id: 'rentPeriodicityIds', value: ['3']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['8']},
            {operator: 'NSUPERSET', id: 'rentPeriodicityIds', value: ['3']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'transactionTypeId', value: ['8']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      priceSale: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'IN', id: 'transactionTypeId', value: ['4']}
          ],
          then: {
            data: {
              label: 'Transfer price',
              hint: 'Transfer price',
              hidden: false
            }
          }
        },
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '4', '5', '6', '7']
            },
            {operator: 'IN', id: 'transactionTypeId', value: ['1']}
          ],
          then: {
            data: {label: 'Selling price', hint: 'Selling price', hidden: false}
          }
        },
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '4', '5', '6', '7']
            },
            {operator: 'NIN', id: 'transactionTypeId', value: ['1', '4']}
          ],
          then: {data: {hidden: true}}
        }
      ],
      priceRent: [
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            },
            {operator: 'IN', id: 'transactionTypeId', value: ['3', '5', '6']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            },
            {operator: 'NIN', id: 'transactionTypeId', value: ['3', '5', '6']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {
              operator: 'NIN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            }
          ],
          then: {data: {hidden: true}}
        }
      ],
      includesCommunityFees: [
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            },
            {operator: 'IN', id: 'transactionTypeId', value: ['3', '6']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            },
            {operator: 'NIN', id: 'transactionTypeId', value: ['3', '6']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {
              operator: 'NIN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            }
          ],
          then: {data: {hidden: true}}
        }
      ],
      requiresLessThanTwoMonthsDeposit: [
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            },
            {operator: 'IN', id: 'transactionTypeId', value: ['3', '6']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {
              operator: 'IN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            },
            {operator: 'NIN', id: 'transactionTypeId', value: ['3', '6']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {
              operator: 'NIN',
              id: 'propertyTypeId',
              value: ['2', '3', '5', '6', '7']
            }
          ],
          then: {data: {hidden: true}}
        }
      ],
      surfaceLand: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'propertySubTypeId', value: ['3', '5', '9']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'propertySubTypeId', value: ['3', '5', '9']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      propertySubTypeLandId: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['4']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['4']}],
          then: {data: {hidden: true}}
        }
      ],
      rooms: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      bathrooms: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      isIndustrialBuilding: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['5']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['5']}],
          then: {data: {hidden: true}}
        }
      ],
      energyCertificateId: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2', '5', '6']}
          ],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [
            {operator: 'NIN', id: 'propertyTypeId', value: ['2', '5', '6']}
          ],
          then: {data: {hidden: true, required: false}}
        }
      ],
      energyCertificateGroup: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'IN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'NIN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: true}}
        }
      ],
      energyEfficiencyRating: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'IN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: true, required: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'NIN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: true, required: false}}
        }
      ],
      energyEfficiencyValue: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'IN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: true, required: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'NIN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: true, required: false}}
        }
      ],
      environmentImpactRating: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'IN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: true, required: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'NIN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: true, required: false}}
        }
      ],
      environmentImpactValue: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'IN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: true, required: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['5']},
            {operator: 'NIN', id: 'isIndustrialBuilding', value: ['true']}
          ],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: false, required: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2', '6']}],
          then: {data: {hidden: true, required: false}}
        }
      ],
      extrasBuilding: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      extrasParking: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['3']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['3']}],
          then: {data: {hidden: true}}
        }
      ],
      extrasBusiness: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['5']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['5']}],
          then: {data: {hidden: true}}
        }
      ],
      extrasBoxroom: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['7']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['7']}],
          then: {data: {hidden: true}}
        }
      ],
      extrasInside: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['5']}],
          then: {
            data: {
              hidden: false,
              value: '',
              datalist: [
                {value: '1', text: 'Air conditioning'},
                {value: '3', text: 'Heating'}
              ]
            }
          }
        },
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2']}],
          then: {
            data: {
              hidden: false,
              value: '',
              datalist: [
                {value: '1', text: 'Air conditioning'},
                {value: '2', text: 'Cupboards'},
                {value: '3', text: 'Heating'},
                {value: '9', text: 'Parquet flooring'},
                {value: '15', text: 'Kitchen/breakfast room'},
                {value: '18', text: 'Suite - bathroom included'},
                {value: '19', text: 'Furnished'},
                {value: '21', text: 'Electrical appliances'},
                {value: '22', text: 'Owen'},
                {value: '23', text: 'Washing machine'},
                {value: '24', text: 'Microwave'},
                {value: '25', text: 'Refrigerator'},
                {value: '29', text: 'TV'},
                {value: '52', text: 'Internet'},
                {value: '84', text: 'Security door'},
                {value: '109', text: 'Laundry room'},
                {value: '130', text: 'Unfurnished'}
              ]
            }
          }
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2', '5']}],
          then: {data: {hidden: true}}
        }
      ],
      extrasOutside: [
        {
          when: [{operator: 'IN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: false}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      extrasDeluxe: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['1']},
            {operator: 'GREATERTHAN', id: 'priceSale', value: ['799999']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['1']},
            {operator: 'LESSTHAN', id: 'priceSale', value: ['799999']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['3']},
            {operator: 'GREATERTHAN', id: 'priceRent', value: ['2499']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['3']},
            {operator: 'LESSTHAN', id: 'priceRent', value: ['2499']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'transactionTypeId', value: ['1', '3']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ],
      extrasSharing: [
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'IN', id: 'transactionTypeId', value: ['5']}
          ],
          then: {data: {hidden: false}}
        },
        {
          when: [
            {operator: 'IN', id: 'propertyTypeId', value: ['2']},
            {operator: 'NIN', id: 'transactionTypeId', value: ['5']}
          ],
          then: {data: {hidden: true}}
        },
        {
          when: [{operator: 'NIN', id: 'propertyTypeId', value: ['2']}],
          then: {data: {hidden: true}}
        }
      ]
    }
  }
}
