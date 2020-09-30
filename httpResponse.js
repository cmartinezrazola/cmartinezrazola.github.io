//    GET ./ HTTP/1.1
//    Accept: application/vnd.api+json

//    HTTP/1.1 200 OK
//    Content-Type: application/vnd.api+json

const httpResponse = 
{
    links: {
        self: "./", 
    },
    meta: {
        author: "Cesar Martinez Razola"
    },
    jsonapi:{
        version: '1.0'
    },
    data: [
        {
            type: "runs",
            id: "478",
            attributes: {
                name:               '00000478',
                material:           'CARBON GLASS METAL',
                baseComposite:      '00000442',
                baseMetal:          '00000442', 
                user:               'razola',
                date:               '15.01.20',
                sector:             'AUTOMOTIVE',
                vehicle:            'XX02',
                gate:               'G1',
                task:               'E',
                category:           'crash',
                loadcase:           'side pole',
                configuration: [
                                    'U.S.NCAP',
                                    '40.7 km/h',
                                    'child Ø165mm, 3.5 kg, 50°',
                                    'adult: Ø165 mm, 4.5 kg, 65°',
                ],
                replacedParts:     'engine hood',
                stacking: [
                                    'Skin upper: ply 0.4 fleece C [0|0] (total 0.8 mm)',
                                    'Core: Zotefoams Zotek N B70 (total 18 mm)',
                                    'Skin lower: ply 0.4 fleece C [0|0] (total 0.8 mm)',
                                    'Bracket: ply 0.36 UD C [0|90] (total 0.7 mm)',
                                    'no lock plate',
                ],
                mass:               '6587',
                massRatio:          '85',
                performance: [
                                    'OK : P1, P2, P3, P5, P6',
                                    'NOK : P4',
                        ],
                rating:             'GREEN ORANGE RED',
                description: [
                                    '- fleece 0.8 mm',
                                    '- bracket 0.7 mm',
                                    '- no lock plate',
                                    '- no hinges',
                ],
            },
            relationships: {
                presentation: {
                    links: {
                        self:'./runs/478/relationship/presentation',
                        related:'./runs/478/presentation'
                    },
                    data: [
                        {type: 'renderingCards',   id:'478_1'},
                        {type: 'viewCards',        id:'478_1'},
                        {type: 'viewCards',        id:'478_2'},
                        {type: 'performanceCards', id:'478_1'},
                        {type: 'checkCards',       id:'478_1'},
                    ], 
                }
            }
        },
    ],
    included: [
        {
            type: 'renderingCards', 
            id:'478_1', 
            attributes:{
                    title: 'Rendering',
                    material: 'CARBON GLASS METAL',
                    media: [
                        runDir + '00000478/' + mediaDir + 'Rendering.mp4'
                    ]
                },
            links:{
                self: './renderingCards/478_1'
            }
        },
        {
            type: 'viewCards', 
            id:'478_1', 
            attributes:{
                    title: 'View 1',
                    material: 'CARBON GLASS METAL',
                    media: [
                        runDir + '00000478/' + mediaDir + 'View1.mp4'
                    ]
                },
            links:{
                self: './viewCards/478_1'
            }
        },
        {
            type: 'viewCards', 
            id:'478_2', 
            attributes:{
                    title: 'View 2',
                    material: 'CARBON GLASS METAL',
                    media: [
                        runDir + '00000478/' + mediaDir + 'View2.mp4'
                    ]
                },
            links:{
                self: './viewCards/478_2'
            }
        },
        {
            type: 'performanceCards', 
            id:'478_1', 
            attributes:{
                    title: 'Resistance',
                    material: 'CARBON GLASS METAL',
                    media: [
                        runDir + '00000478/' + mediaDir + 'Resistance.gif',
                        runDir + '00000478/' + mediaDir + 'View1.jpg'
                    ]
                },
            links:{
                self: './performanceCards/478_1'
            }
        },
        {
            type: 'checkCards', 
            id:'478_1', 
            attributes:{
                    title: 'Check',
                    material: 'CARBON GLASS METAL',
                    media: [
                        runDir + '00000478/' + mediaDir + 'Quasistatic.jpg',
                        runDir + '00000478/' + mediaDir + 'Mass.jpg',
                        runDir + '00000478/' + mediaDir + 'Energy.jpg'
                    ]
                },
            links:{
                self: './checkCards/478_1'
            }
        },
    ]
}
