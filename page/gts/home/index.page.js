import * as hmUI from "@zos/ui";
import { createWidget, widget, deleteWidget } from '@zos/ui'
import { setWakeUpRelaunch } from '@zos/display'
import { setStatusBarVisible } from '@zos/ui'
import { log as Logger } from '@zos/utils'
import { POINT_A_TEXT, SET_1A_TEXT, SET_2A_TEXT, SET_3A_TEXT, SET_1B_TEXT, SET_2B_TEXT, SET_3B_TEXT, POINT_B_TEXT, RESET_BUTTON, SET_1ATB_TEXT, SET_1BTB_TEXT, SET_2ATB_TEXT, SET_2BTB_TEXT }from './index.style'
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './index.style'
import { px } from "@zos/utils";

const logger = Logger.getLogger("tennis_score_app");

  let pointA = 0
  let pointB = 0
  let gameA = 0
  let gameB = 0
  let setNum = 1
  let setA = 0
  let setB = 0
  let tieBreak = false
  let superTB = false

  let pointAtext = ""
  let pointBtext = ""
  let set1Atext = ""
  let set2Atext = ""
  let set3Atext = ""
  let set1Btext = ""
  let set2Btext = ""
  let set3Btext = ""
  let resetButton = ""
  let set1ATBtext = ""
  let set1BTBtext = ""
  let set2ATBtext = ""
  let set2BTBtext = ""

Page({
  onInit() {
    logger.debug("page onInit invoked");
    
  },

  build() {
    logger.debug('page build invoked')

    setWakeUpRelaunch({
      relaunch: true,
    })

    setStatusBarVisible(false)
    createWidget(widget.PAGE_SCROLLBAR)
    this.createCanvas()

    pointAtext = hmUI.createWidget(hmUI.widget.TEXT, POINT_A_TEXT);
    pointBtext = hmUI.createWidget(hmUI.widget.TEXT, POINT_B_TEXT);
    set1Atext = hmUI.createWidget(hmUI.widget.TEXT, SET_1A_TEXT);
    set1Btext = hmUI.createWidget(hmUI.widget.TEXT, SET_1B_TEXT);
    set1ATBtext = hmUI.createWidget(hmUI.widget.TEXT, SET_1ATB_TEXT);
    set1BTBtext = hmUI.createWidget(hmUI.widget.TEXT, SET_1BTB_TEXT);
    set2ATBtext = hmUI.createWidget(hmUI.widget.TEXT, SET_2ATB_TEXT);
    set2BTBtext = hmUI.createWidget(hmUI.widget.TEXT, SET_2BTB_TEXT);
    resetButton = hmUI.createWidget(hmUI.widget.BUTTON, RESET_BUTTON);

    pointAtext.addEventListener(hmUI.event.CLICK_UP, (info) => {
      pointA++
      if (!tieBreak) {
        this.winPoint(pointA, "A", setNum)
      }else {
        this.playTieBreak("A", setNum)
      }
    })
    pointBtext.addEventListener(hmUI.event.CLICK_UP, (info) => {
      pointB++
      if (!tieBreak) {
        this.winPoint(pointB, "B", setNum, superTB)
      }else {
        this.playTieBreak("B", setNum,)
      }
    })
    resetButton.addEventListener(hmUI.event.CLICK_UP, (info) => {
      this.resetMatch()
    })
    
  },

  winPoint(point, team, setN){
    if (team == "A") {
      switch (point) {
        case 1:
          pointAtext.setProperty(hmUI.prop.MORE, {
            text: "15"
          })
          break
        case 2:
          pointAtext.setProperty(hmUI.prop.MORE, {
            text: "30"
          })
          break
        case 3:
          pointAtext.setProperty(hmUI.prop.MORE, {
            text: "40"
          })
          break
        case 4:
          if (pointB == 3){
            pointAtext.setProperty(hmUI.prop.MORE, {
              text: "AD"
            })
          }else if (pointB == 4) {
            pointA = 3
            pointB = 3
            pointBtext.setProperty(hmUI.prop.MORE, {
              text: "40"
            })
          }else {
            this.checkSet(setN, team)                     
            this.resetPoints()
          }
          break
        case 5:
            this.checkSet(setN, team)
            this.resetPoints()
          break
        default:
          pointAtext.setProperty(hmUI.prop.MORE, {
            text: "0"
          })
      }
    }else {
      switch (point) {
        case 1:
          pointBtext.setProperty(hmUI.prop.MORE, {
            text: "15"
          })
          break
        case 2:
          pointBtext.setProperty(hmUI.prop.MORE, {
            text: "30"
          })
          break
        case 3:
          pointBtext.setProperty(hmUI.prop.MORE, {
            text: "40"
          })
          break
        case 4:
          if (pointA == 3){
            pointBtext.setProperty(hmUI.prop.MORE, {
              text: "AD"
            })
          }else if (pointA == 4) {
            pointB = 3
            pointA = 3
            pointAtext.setProperty(hmUI.prop.MORE, {
              text: "40"
            })
          }else {
            this.checkSet(setN, team)  
            this.resetPoints()
          }
          break
        case 5:
          this.checkSet(setN, team)
          this.resetPoints()
          break
        default:
          pointBtext.setProperty(hmUI.prop.MORE, {
            text: "0"
          })
      }
    }
    
  },

  checkSet(setN, team){
    if (team == "A") {
      gameA++
  
      switch (setN) {
        case 1: 
          set1Atext.setProperty(hmUI.prop.MORE, {
            text: gameA
          })
          break
        case 2:
          set2Atext.setProperty(hmUI.prop.MORE, {
            text: gameA
          })
          break
        case 3:
          set3Atext.setProperty(hmUI.prop.MORE, {
            text: gameA
          })
          break
        default:
          set3Atext.setProperty(hmUI.prop.MORE, {
            text: gameA
          })
          break
      }      

      if (gameA >= 6 && gameA-gameB >= 2){
        setNum++
        setA++
        this.changeSet(setNum)
        this.resetGame()
      }else if (gameA == 6 && gameB == 6) {
        this.resetPoints()
      }

    }else {
      gameB++
  
      switch (setN) {
        case 1: 
          set1Btext.setProperty(hmUI.prop.MORE, {
            text: gameB
          })
          break
        case 2:
          set2Btext.setProperty(hmUI.prop.MORE, {
            text: gameB
          })
          break
        case 3:
          set3Btext.setProperty(hmUI.prop.MORE, {
            text: gameB
          })
          break
        default:
          set3Btext.setProperty(hmUI.prop.MORE, {
            text: gameB
          })
          break
      }

      if (gameB >= 6 && gameB-gameA >= 2){
        setNum++
        setB++
        this.changeSet(setNum)
        this.resetGame()
      }else if (gameB == 6 && gameA == 6) {
        tieBreak = true
        this.resetPoints()
      }
    }
  },

  changeSet(setN,){
    switch (setN) {
      case 2:
        set1Atext.setProperty(hmUI.prop.MORE, {
          x: -20,
        })
        set1Btext.setProperty(hmUI.prop.MORE, {
          x: -20,
        })
        
        set2Atext = hmUI.createWidget(hmUI.widget.TEXT, SET_2A_TEXT);
        set2Btext = hmUI.createWidget(hmUI.widget.TEXT, SET_2B_TEXT);
        break
      case 3:
        if (setA != 2 && setB != 2) {
          
          set1Atext.setProperty(hmUI.prop.MORE, {
            x: -40,
          })
          set1Btext.setProperty(hmUI.prop.MORE, {
            x: -40,
          })
          set2Atext.setProperty(hmUI.prop.MORE, {
            x: 0,
          })
          set2Btext.setProperty(hmUI.prop.MORE, {
            x: 0,
          })
          set1ATBtext.setProperty(hmUI.prop.MORE, {
            x: -23,
          })
          set1BTBtext.setProperty(hmUI.prop.MORE, {
            x: -23,
          })
          set3Atext = hmUI.createWidget(hmUI.widget.TEXT, SET_3A_TEXT);
          set3Btext = hmUI.createWidget(hmUI.widget.TEXT, SET_3B_TEXT);
          
        }else {
          //FIN DEL PARTIDO
        }
        break
    }
  },

  resetPoints() {
    pointA = 0
    pointB = 0
    pointAtext.setProperty(hmUI.prop.MORE, {
      text: "0"
    })
    pointBtext.setProperty(hmUI.prop.MORE, {
      text: "0"
    })
  },

  resetGame() {
    gameA = 0
    gameB = 0
    this.resetPoints()
  },

  resetMatch() {
    this.resetPoints()
    this.resetGame()
    set1Atext.setProperty(hmUI.prop.MORE, {
      text: "0",
      x: 0
    })
    set1Btext.setProperty(hmUI.prop.MORE, {
      text: "0",
      x: 0
    })

    deleteWidget(set2Atext)
    deleteWidget(set2Btext)
    deleteWidget(set3Atext)
    deleteWidget(set3Btext)
    deleteWidget(set1ATBtext)
    deleteWidget(set1BTBtext)
    deleteWidget(set2ATBtext)
    deleteWidget(set2BTBtext)
    
    setNum = 1
  },

  playTieBreak(team, setN) {
    if (team == "A") {
      pointAtext.setProperty(hmUI.prop.MORE, {
        text: pointA
      })
    }else {
      pointBtext.setProperty(hmUI.prop.MORE, {
        text: pointB
      })   
    }

    if (pointA >= 7 && pointA-pointB  >= 2) {
      gameA++
      switch (setN) {
        case 1:   
          set1Atext.setProperty(hmUI.prop.MORE, {
            text: gameA,
          })
          set1BTBtext.setProperty(hmUI.prop.MORE, {
            text: pointB,
          })
          break
        case 2:
          set2Atext.setProperty(hmUI.prop.MORE, {
            text: gameA
          })
          set2BTBtext.setProperty(hmUI.prop.MORE, {
            text: pointB,
          }) 
          break
        case 3:
          
          break
        default:
          set1Atext.setProperty(hmUI.prop.MORE, {
            text: gameA,
          })
          break
      }
        
      setNum++
      tieBreak = false
      this.changeSet(setNum)
      this.resetGame()
   
    }

    if (pointB >= 7 && pointB-pointA  >= 2) {
      gameB++
      switch (setN) {
        case 1: 
          set1Btext.setProperty(hmUI.prop.MORE, {
            text: gameB,
          })
          set1ATBtext.setProperty(hmUI.prop.MORE, {
            text: pointA,
          }) 
          break
        case 2:
          set2Btext.setProperty(hmUI.prop.MORE, {
            text: gameB
          })
          set2ATBtext.setProperty(hmUI.prop.MORE, {
            text: pointA,
          }) 
          break
        case 3:
            
          break
        default:
  
          break
      }
      setNum++
      tieBreak = false
      this.changeSet(setNum)
      this.resetGame()
    }    
  },

  createSuperTBDialog() {
    const dialog = hmUI.createDialog({
      title: '¿Tie-Break?',
      auto_hide: false,
      click_linster: ({ type }) => {
        dialog.show(false)
        if (type == 1) {
          
        }
      }
    })

    dialog.show(true)
  },
  
  createCanvas() {
    //fondo
    createWidget(widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: DEVICE_WIDTH,
      h: DEVICE_HEIGHT + 70,
      radius: px(10),
      color: 0x3569BD,
    })

    //pista
    createWidget(widget.FILL_RECT, {
      x: 25,
      y: 10,
      w: DEVICE_WIDTH - 50,
      h: DEVICE_HEIGHT - 20,
      radius: px(10),
      color: 0x28559E,
    })

    //linea del medio
    createWidget(widget.FILL_RECT, {
      x: 25,
      y: DEVICE_HEIGHT / 2,
      w: DEVICE_WIDTH - 50,
      h: 2,
      radius: 10,
      color: 0xffffff,
    })

    //contorno
    createWidget(widget.STROKE_RECT, {
      x: 25,
      y: 10,
      w: DEVICE_WIDTH - 50,
      h: DEVICE_HEIGHT - 20,
      radius: 10,
      color: 0xffffff,
    })

    //pasillos
    createWidget(widget.STROKE_RECT, {
      x: 70,
      y: 10,
      w: DEVICE_WIDTH - 140,
      h: DEVICE_HEIGHT - 20,
      radius: 0,
      color: 0xffffff,
    })

    //zona de saque
    createWidget(widget.STROKE_RECT, {
      x: 70,
      y: 120,
      w: DEVICE_WIDTH - 140,
      h: DEVICE_HEIGHT - 240,
      radius: 0,
      color: 0xffffff,
    })

    //lado de saque
    createWidget(widget.FILL_RECT, {
      x: DEVICE_WIDTH / 2,
      y: 120,
      w: 2,
      h: 50,
      radius: 10,
      color: 0xffffff,
    })

    createWidget(widget.FILL_RECT, {
      x: DEVICE_WIDTH / 2,
      y: 280,
      w: 2,
      h: 50,
      radius: 10,
      color: 0xffffff,
    })
    
  },

});
