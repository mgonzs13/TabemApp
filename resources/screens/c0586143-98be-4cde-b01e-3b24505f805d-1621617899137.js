jQuery("#simulation")
  .on("click", ".s-c0586143-98be-4cde-b01e-3b24505f805d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Black-cover")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-side-drawer-dialog" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-side-drawer-dialog" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9a8c17a7-9420-42c5-bd6c-b62278f4c90f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9a8c17a7-9420-42c5-bd6c-b62278f4c90f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/32745e70-4d2e-4e8c-b5a3-2300e7bd4349"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/32745e70-4d2e-4e8c-b5a3-2300e7bd4349"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0534ba30-7c9a-435f-b6b7-088e2e7bb63d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0534ba30-7c9a-435f-b6b7-088e2e7bb63d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_91")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2902eccb-781c-4c48-8ed4-2892d70edb68"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2902eccb-781c-4c48-8ed4-2892d70edb68"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bc956b78-03d2-40a1-9397-277be77ada8e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bc956b78-03d2-40a1-9397-277be77ada8e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/afcbba9e-dac0-4120-9f19-521d7bea228b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_96")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/afcbba9e-dac0-4120-9f19-521d7bea228b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-side-drawer-dialog" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Black-cover","#s-side-drawer-dialog" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_2 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_1 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_3 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_4 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_2 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_3 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_4 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_2 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_3 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_4 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_2 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_3 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_4 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_2 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_4 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_3 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_5 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_7 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_6 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_8 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_9 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_6 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_5 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_7 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_8 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_9 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_7 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_6 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_5 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_8 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_9 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_7 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_6 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_8 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_5 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_9 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_7 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_6 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_9 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_8 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_5 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_11 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_13 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_13 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_12 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_13 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_12 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_13 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-star-1_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_12 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_14 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_13 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-c0586143-98be-4cde-b01e-3b24505f805d #s-star-1_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5b2a223f-579b-4d21-b906-750835ef9261"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5b2a223f-579b-4d21-b906-750835ef9261"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5b2a223f-579b-4d21-b906-750835ef9261"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/32745e70-4d2e-4e8c-b5a3-2300e7bd4349"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });