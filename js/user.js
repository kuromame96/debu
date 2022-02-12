Tonyu.klass.define({
  fullName: 'user.Alien',
  shortName: 'Alien',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Alien_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_alien+0;
        _this.flip=false;
        _this.frame=0;
        _this.sp=- 10;
        _this.hp=1;
        _this.scale=0.8;
        _this.angle=1;
        _this.vAngle=3;
        _this.angleSP=- 0.1;
        _this.parallel("walk");
        while (true) {
          Tonyu.checkLoop();
          _this.cl=_this.crashTo(Tonyu.classes.user.HanatuKuimono);
          if (_this.cl) {
            _this.hp--;
            _this.parallel("damageEffect");
            _this.cl.die();
            if (_this.hp<=0) {
              break;
              
            }
            
          }
          _this.update();
          
        }
        _this.p=Tonyu.globals.$pat_alien+1;
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gua,128,0,0.8);
        while (true) {
          Tonyu.checkLoop();
          _this.vAngle+=_this.angleSP;
          _this.angle+=_this.vAngle;
          _this.rotation=_this.angle;
          _this.y+=_this.angle*0.1;
          if (_this.vAngle<=0) {
            break;
            
          }
          _this.update();
          
        }
        _this.updateEx(10);
        while (_this.alpha>0) {
          Tonyu.checkLoop();
          _this.alpha+=- 10;
          _this.update();
          
        }
        Tonyu.globals.$breakAlien++;
        _this.die();
      },
      fiber$main :function _trc_Alien_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_alien+0;
        _this.flip=false;
        _this.frame=0;
        _this.sp=- 10;
        _this.hp=1;
        _this.scale=0.8;
        _this.angle=1;
        _this.vAngle=3;
        _this.angleSP=- 0.1;
        _this.parallel("walk");
        
        _thread.enter(function _trc_Alien_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.cl=_this.crashTo(Tonyu.classes.user.HanatuKuimono);
              if (!(_this.cl)) { __pc=3     ; break; }
              _this.hp--;
              _this.parallel("damageEffect");
              _this.cl.die();
              if (!(_this.hp<=0)) { __pc=2     ; break; }
              __pc=5     ; break;
              
            case 2     :
              
            case 3     :
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=1;break;
            case 5     :
              
              _this.p=Tonyu.globals.$pat_alien+1;
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gua,128,0,0.8);
            case 6:
              _this.vAngle+=_this.angleSP;
              _this.angle+=_this.vAngle;
              _this.rotation=_this.angle;
              _this.y+=_this.angle*0.1;
              if (!(_this.vAngle<=0)) { __pc=7     ; break; }
              __pc=9     ; break;
              
            case 7     :
              
              _this.fiber$update(_thread);
              __pc=8;return;
            case 8:
              
              __pc=6;break;
            case 9     :
              
              _this.fiber$updateEx(_thread, 10);
              __pc=10;return;
            case 10:
              
            case 11:
              if (!(_this.alpha>0)) { __pc=13    ; break; }
              _this.alpha+=- 10;
              _this.fiber$update(_thread);
              __pc=12;return;
            case 12:
              
              __pc=11;break;
            case 13    :
              
              Tonyu.globals.$breakAlien++;
              _this.die();
              _thread.exit(_this);return;
            }
          }
        });
      },
      walk :function _trc_Alien_walk() {
        "use strict";
        var _this=this;
        
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          _this.y+=_this.sp;
          if (_this.frame%3===0) {
            _this.flip=! _this.flip;
          }
          _this.scaleX=_this.flip?_this.scale:- _this.scale;
          _this.scaleY=_this.scale;
          if (_this.hp<=0) {
            break;
            
          }
          _this.update();
          
        }
      },
      fiber$walk :function _trc_Alien_f_walk(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Alien_ent_walk(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.frame++;
              _this.y+=_this.sp;
              if (_this.frame%3===0) {
                _this.flip=! _this.flip;
              }
              _this.scaleX=_this.flip?_this.scale:- _this.scale;
              _this.scaleY=_this.scale;
              if (!(_this.hp<=0)) { __pc=2     ; break; }
              __pc=4     ; break;
              
            case 2     :
              
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=1;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      damageEffect :function _trc_Alien_damageEffect() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_doko);
        _this.hide();
        _this.updateEx(0.5);
        _this.show();
        _this.updateEx(0.5);
        _this.hide();
        _this.updateEx(0.5);
        _this.show();
      },
      fiber$damageEffect :function _trc_Alien_f_damageEffect(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_doko);
        _this.hide();
        
        _thread.enter(function _trc_Alien_ent_damageEffect(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$updateEx(_thread, 0.5);
              __pc=1;return;
            case 1:
              
              _this.show();
              _this.fiber$updateEx(_thread, 0.5);
              __pc=2;return;
            case 2:
              
              _this.hide();
              _this.fiber$updateEx(_thread, 0.5);
              __pc=3;return;
            case 3:
              
              _this.show();
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"walk":{"nowait":false},"damageEffect":{"nowait":false}},"fields":{"flip":{},"frame":{},"sp":{},"hp":{},"scale":{},"angle":{},"vAngle":{},"angleSP":{},"cl":{}}}
});
Tonyu.klass.define({
  fullName: 'user.DebuMot',
  shortName: 'DebuMot',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_DebuMot_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_DebuMot_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      sound :function _trc_DebuMot_sound(se1,se2) {
        "use strict";
        var _this=this;
        var sound_not_play;
        
        sound_not_play = false;
        
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$tabeta===100&&! sound_not_play) {
            Tonyu.globals.$sound.playSE(se1);
            sound_not_play=true;
            
          }
          if (Tonyu.globals.$tabeta===300&&! sound_not_play) {
            Tonyu.globals.$sound.playSE(se1);
            Tonyu.globals.$sound.playSE(se2);
            sound_not_play=true;
            
          }
          if (Tonyu.globals.$tabeta===101||Tonyu.globals.$tabeta===99||Tonyu.globals.$tabeta===201||Tonyu.globals.$tabeta===199||Tonyu.globals.$tabeta===299||Tonyu.globals.$tabeta===301) {
            sound_not_play=false;
            
          }
          _this.update();
          
        }
      },
      fiber$sound :function _trc_DebuMot_f_sound(_thread,se1,se2) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var sound_not_play;
        
        sound_not_play = false;
        
        
        _thread.enter(function _trc_DebuMot_ent_sound(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (Tonyu.globals.$tabeta===100&&! sound_not_play) {
                Tonyu.globals.$sound.playSE(se1);
                sound_not_play=true;
                
              }
              if (Tonyu.globals.$tabeta===300&&! sound_not_play) {
                Tonyu.globals.$sound.playSE(se1);
                Tonyu.globals.$sound.playSE(se2);
                sound_not_play=true;
                
              }
              if (Tonyu.globals.$tabeta===101||Tonyu.globals.$tabeta===99||Tonyu.globals.$tabeta===201||Tonyu.globals.$tabeta===199||Tonyu.globals.$tabeta===299||Tonyu.globals.$tabeta===301) {
                sound_not_play=false;
                
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      pUpdate :function _trc_DebuMot_pUpdate() {
        "use strict";
        var _this=this;
        
        if (Tonyu.globals.$tabeta<100) {
          _this.p=Tonyu.globals.$pat_debu+0;
          _this.crashScale=0.1;
          
        } else {
          if (Tonyu.globals.$tabeta<300) {
            _this.p=Tonyu.globals.$pat_debu+1;
            _this.crashScale=0.3;
            
          } else {
            if (Tonyu.globals.$tabeta>300) {
              _this.p=Tonyu.globals.$pat_debu+2;
              _this.crashScale=0.7;
              
            }
          }
        }
      },
      fiber$pUpdate :function _trc_DebuMot_f_pUpdate(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        if (Tonyu.globals.$tabeta<100) {
          _this.p=Tonyu.globals.$pat_debu+0;
          _this.crashScale=0.1;
          
        } else {
          if (Tonyu.globals.$tabeta<300) {
            _this.p=Tonyu.globals.$pat_debu+1;
            _this.crashScale=0.3;
            
          } else {
            if (Tonyu.globals.$tabeta>300) {
              _this.p=Tonyu.globals.$pat_debu+2;
              _this.crashScale=0.7;
              
            }
          }
        }
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"sound":{"nowait":false},"pUpdate":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.HanatuDebu',
  shortName: 'HanatuDebu',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.DebuMot],
  methods: function (__superClass) {
    return {
      main :function _trc_HanatuDebu_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_debu+0;
        _this.firstX=Tonyu.globals.$screenWidth*0.5;
        _this.firstY=Tonyu.globals.$screenHeight*0.1;
        _this.frame=0;
        _this.parallel("sound",Tonyu.globals.$se_ha);
        while (true) {
          Tonyu.checkLoop();
          if (_this.frame%6===0) {
            new Tonyu.classes.user.HanatuKuimono({firstPosX: _this.x,firstPosY: _this.y});
            Tonyu.globals.$tabeta--;
            
          }
          ;
          
          _this.pUpdate();
          _this.frame++;
          _this.update();
          
        }
      },
      fiber$main :function _trc_HanatuDebu_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_debu+0;
        _this.firstX=Tonyu.globals.$screenWidth*0.5;
        _this.firstY=Tonyu.globals.$screenHeight*0.1;
        _this.frame=0;
        _this.parallel("sound",Tonyu.globals.$se_ha);
        
        _thread.enter(function _trc_HanatuDebu_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              if (_this.frame%6===0) {
                new Tonyu.classes.user.HanatuKuimono({firstPosX: _this.x,firstPosY: _this.y});
                Tonyu.globals.$tabeta--;
                
              }
              ;
              
              _this.fiber$pUpdate(_thread);
              __pc=2;return;
            case 2:
              
              _this.frame++;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=1;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstX":{},"firstY":{},"frame":{}}}
});
Tonyu.klass.define({
  fullName: 'user.HanatuKuimono',
  shortName: 'HanatuKuimono',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_HanatuKuimono_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_kuimono+_this.rnd(4);
        _this.firstPosX;
        _this.firstPoxY;
        _this.scaleX=0.4;
        _this.sp=50;
        _this.radius=1;
        _this.crashScale=0.5;
        _this.targetAngle;
        if (! Tonyu.globals.$Navigator.isMobile()||! Tonyu.globals.$Navigator.isTablet()) {
          _this.targetAngle=_this.atan2(Tonyu.globals.$mouseY-_this.firstPosY,Tonyu.globals.$mouseX-_this.firstPosX);
          
        } else {
          _this.targetAngle=_this.atan2(Tonyu.globals.$touches[0].y,Tonyu.globals.$touches[0].x);
          
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_burp1);
        while (true) {
          Tonyu.checkLoop();
          _this.radius+=_this.sp;
          _this.x=_this.firstPosX+_this.cos(_this.targetAngle)*_this.radius;
          _this.y=_this.firstPosY+_this.sin(_this.targetAngle)*_this.radius;
          if (_this.screenOut(512*0.5)) {
            _this.die();
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_HanatuKuimono_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_kuimono+_this.rnd(4);
        _this.firstPosX;
        _this.firstPoxY;
        _this.scaleX=0.4;
        _this.sp=50;
        _this.radius=1;
        _this.crashScale=0.5;
        _this.targetAngle;
        if (! Tonyu.globals.$Navigator.isMobile()||! Tonyu.globals.$Navigator.isTablet()) {
          _this.targetAngle=_this.atan2(Tonyu.globals.$mouseY-_this.firstPosY,Tonyu.globals.$mouseX-_this.firstPosX);
          
        } else {
          _this.targetAngle=_this.atan2(Tonyu.globals.$touches[0].y,Tonyu.globals.$touches[0].x);
          
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_burp1);
        
        _thread.enter(function _trc_HanatuKuimono_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.radius+=_this.sp;
              _this.x=_this.firstPosX+_this.cos(_this.targetAngle)*_this.radius;
              _this.y=_this.firstPosY+_this.sin(_this.targetAngle)*_this.radius;
              if (_this.screenOut(512*0.5)) {
                _this.die();
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"firstPosX":{},"firstPoxY":{},"sp":{},"targetAngle":{},"firstPosY":{}}}
});
Tonyu.klass.define({
  fullName: 'user.TaberuDebu',
  shortName: 'TaberuDebu',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.DebuMot],
  methods: function (__superClass) {
    return {
      main :function _trc_TaberuDebu_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_debu+0;
        _this.crashScale=0.1;
        _this.parallel("sound",Tonyu.globals.$se_se_maoudamashii_se_drink02,Tonyu.globals.$se_gottuan);
        while (true) {
          Tonyu.checkLoop();
          _this.x=Tonyu.globals.$mouseX;
          _this.y=Tonyu.globals.$mouseY;
          _this.pUpdate();
          _this.update();
          
        }
      },
      fiber$main :function _trc_TaberuDebu_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_debu+0;
        _this.crashScale=0.1;
        _this.parallel("sound",Tonyu.globals.$se_se_maoudamashii_se_drink02,Tonyu.globals.$se_gottuan);
        
        _thread.enter(function _trc_TaberuDebu_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.x=Tonyu.globals.$mouseX;
              _this.y=Tonyu.globals.$mouseY;
              _this.fiber$pUpdate(_thread);
              __pc=2;return;
            case 2:
              
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=1;break;
            case 4     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.TaberuKuimono',
  shortName: 'TaberuKuimono',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_TaberuKuimono_main() {
        "use strict";
        var _this=this;
        
        _this.p=Tonyu.globals.$pat_kuimono+_this.rnd(4);
        _this.scaleX=0.5;
        _this.sp;
        _this.crashScale=0.5;
        while (true) {
          Tonyu.checkLoop();
          _this.y+=_this.sp;
          if (_this.screenOut(512*0.5)) {
            _this.die();
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_TaberuKuimono_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.p=Tonyu.globals.$pat_kuimono+_this.rnd(4);
        _this.scaleX=0.5;
        _this.sp;
        _this.crashScale=0.5;
        
        _thread.enter(function _trc_TaberuKuimono_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.y+=_this.sp;
              if (_this.screenOut(512*0.5)) {
                _this.die();
              }
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"sp":{}}}
});
Tonyu.klass.define({
  fullName: 'user.AlienUI',
  shortName: 'AlienUI',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_AlienUI_main() {
        "use strict";
        var _this=this;
        
        _this.panel=new Tonyu.classes.kernel.Panel({align: "left top",alpha: 60,fillStyle: Tonyu.globals.$fontColor,x: 0,y: 0});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight*0.15);
        _this.label=new Tonyu.classes.kernel.Label({template: "残弾: $tabeta\n倒した数: $breakAlien",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.05,size: 100,fillStyle: "white"});
        _this.on("die",(function anonymous_316() {
          
          _this.panel.die();
          _this.label.die();
        }));
        _this.update();
      },
      fiber$main :function _trc_AlienUI_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.panel=new Tonyu.classes.kernel.Panel({align: "left top",alpha: 60,fillStyle: Tonyu.globals.$fontColor,x: 0,y: 0});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight*0.15);
        _this.label=new Tonyu.classes.kernel.Label({template: "残弾: $tabeta\n倒した数: $breakAlien",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.05,size: 100,fillStyle: "white"});
        _this.on("die",(function anonymous_316() {
          
          _this.panel.die();
          _this.label.die();
        }));
        
        _thread.enter(function _trc_AlienUI_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"panel":{},"label":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Init',
  shortName: 'Init',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Init_main() {
        "use strict";
        var _this=this;
        
      },
      fiber$main :function _trc_Init_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.retVal=_this;return;
      },
      init :function _trc_Init_init() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$fontColor="#88001b";
        Tonyu.globals.$bgColor="#faf2ee";
        Tonyu.globals.$Screen.resize(1080,1920);
        Tonyu.globals.$Screen.setBGColor(Tonyu.globals.$bgColor);
        Tonyu.globals.$printColor=Tonyu.globals.$fontColor;
        Tonyu.globals.$printSize=100;
      },
      fiber$init :function _trc_Init_f_init(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$fontColor="#88001b";
        Tonyu.globals.$bgColor="#faf2ee";
        Tonyu.globals.$Screen.resize(1080,1920);
        Tonyu.globals.$Screen.setBGColor(Tonyu.globals.$bgColor);
        Tonyu.globals.$printColor=Tonyu.globals.$fontColor;
        Tonyu.globals.$printSize=100;
        
        _thread.retVal=_this;return;
      },
      retry :function _trc_Init_retry() {
        "use strict";
        var _this=this;
        
        Tonyu.globals.$tabeta=0;
        Tonyu.globals.$time=2000;
        Tonyu.globals.$breakAlien=0;
      },
      fiber$retry :function _trc_Init_f_retry(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        Tonyu.globals.$tabeta=0;
        Tonyu.globals.$time=2000;
        Tonyu.globals.$breakAlien=0;
        
        _thread.retVal=_this;return;
      },
      decimalPart :function _trc_Init_decimalPart(num,decDigits) {
        "use strict";
        var _this=this;
        var decPart;
        
        decPart = num-((num>=0)?_this.floor(num):_this.ceil(num));
        
        return decPart.toFixed(decDigits);
      },
      fiber$decimalPart :function _trc_Init_f_decimalPart(_thread,num,decDigits) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var decPart;
        
        decPart = num-((num>=0)?_this.floor(num):_this.ceil(num));
        
        _thread.retVal=decPart.toFixed(decDigits);return;
        
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"init":{"nowait":false},"retry":{"nowait":false},"decimalPart":{"nowait":false}},"fields":{}}
});
Tonyu.klass.define({
  fullName: 'user.KuimonoUI',
  shortName: 'KuimonoUI',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_KuimonoUI_main() {
        "use strict";
        var _this=this;
        
        _this.panel=new Tonyu.classes.kernel.Panel({align: "left top",alpha: 60,fillStyle: Tonyu.globals.$fontColor,x: 0,y: 0});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight*0.15);
        _this.label=new Tonyu.classes.kernel.Label({template: "食べた数: $tabeta\n残り時間: $time秒",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.05,size: 100,fillStyle: "white"});
        _this.update();
      },
      fiber$main :function _trc_KuimonoUI_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.panel=new Tonyu.classes.kernel.Panel({align: "left top",alpha: 60,fillStyle: Tonyu.globals.$fontColor,x: 0,y: 0});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight*0.15);
        _this.label=new Tonyu.classes.kernel.Label({template: "食べた数: $tabeta\n残り時間: $time秒",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.05,size: 100,fillStyle: "white"});
        
        _thread.enter(function _trc_KuimonoUI_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$update(_thread);
              __pc=1;return;
            case 1:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      clear :function _trc_KuimonoUI_clear() {
        "use strict";
        var _this=this;
        
        _this.panel.die();
        _this.label.die();
      },
      fiber$clear :function _trc_KuimonoUI_f_clear(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        _this.panel.die();
        _this.label.die();
        
        _thread.retVal=_this;return;
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"clear":{"nowait":false}},"fields":{"panel":{},"label":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Title',
  shortName: 'Title',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_Title_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.start=false;
        _this.actList=[new Tonyu.classes.kernel.Label({text: "でぶ",size: 300,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.2,yureHaba: 300*0.01}),new Tonyu.classes.kernel.Label({text: "ver 1.0.0",size: 100,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.32,yureHaba: 100*0.01}),new Tonyu.classes.kernel.Label({text: "画面タッチかクリックして",size: 80,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 80*0.01}),new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_debu+1,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5,yureHaba: 300*0.01}),new Tonyu.classes.kernel.Label({text: "* 素材提供 *\n魔王魂 MidingerZ 効果音ラボ",size: 70,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 80*0.01})];
        _this.parallel("actBuruburu");
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$touches[0].touched===1) {
            break;
            
          }
          _this.update();
          
        }
        Tonyu.globals.$sound.stopBGM();
        _this.start=true;
        new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 10,fillStyle: "white"});
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
        _this.update();
        _this.updateEx(30);
        _this.loadPage(Tonyu.classes.user.KuimonoGet);
      },
      fiber$main :function _trc_Title_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Title_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.start=false;
              _this.actList=[new Tonyu.classes.kernel.Label({text: "でぶ",size: 300,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.2,yureHaba: 300*0.01}),new Tonyu.classes.kernel.Label({text: "ver 1.0.0",size: 100,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.32,yureHaba: 100*0.01}),new Tonyu.classes.kernel.Label({text: "画面タッチかクリックして",size: 80,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 80*0.01}),new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_debu+1,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5,yureHaba: 300*0.01}),new Tonyu.classes.kernel.Label({text: "* 素材提供 *\n魔王魂 MidingerZ 効果音ラボ",size: 70,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 80*0.01})];
              _this.parallel("actBuruburu");
            case 2:
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=3     ; break; }
              __pc=5     ; break;
              
            case 3     :
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              Tonyu.globals.$sound.stopBGM();
              _this.start=true;
              new Tonyu.classes.kernel.FadeEffect({type: "in",duration: 10,fillStyle: "white"});
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get);
              _this.fiber$update(_thread);
              __pc=6;return;
            case 6:
              
              _this.fiber$updateEx(_thread, 30);
              __pc=7;return;
            case 7:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.KuimonoGet);
              __pc=8;return;
            case 8:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      actBuruburu :function _trc_Title_actBuruburu() {
        "use strict";
        var _this=this;
        var a_first_pos_list;
        
        a_first_pos_list = _this.actList.map((function anonymous_853(t) {
          
          return {x: t.x,y: t.y};
        }));
        
        while (true) {
          Tonyu.checkLoop();
          a_first_pos_list.map((function anonymous_951(fp,i) {
            var a;
            
            a = _this.actList[i];
            
            a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
            a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
          }));
          if (_this.start) {
            break;
            
          }
          _this.update();
          
        }
        a_first_pos_list.map((function anonymous_1259(fp,i) {
          var a;
          
          a = _this.actList[i];
          
          a.x=fp.x;
          a.y=fp.y;
        }));
        _this.update();
      },
      fiber$actBuruburu :function _trc_Title_f_actBuruburu(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        var a_first_pos_list;
        
        a_first_pos_list = _this.actList.map((function anonymous_853(t) {
          
          return {x: t.x,y: t.y};
        }));
        
        
        _thread.enter(function _trc_Title_ent_actBuruburu(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              a_first_pos_list.map((function anonymous_951(fp,i) {
                var a;
                
                a = _this.actList[i];
                
                a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
                a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
              }));
              if (!(_this.start)) { __pc=2     ; break; }
              __pc=4     ; break;
              
            case 2     :
              
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
              __pc=1;break;
            case 4     :
              
              a_first_pos_list.map((function anonymous_1259(fp,i) {
                var a;
                
                a = _this.actList[i];
                
                a.x=fp.x;
                a.y=fp.y;
              }));
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"actBuruburu":{"nowait":false}},"fields":{"start":{},"actList":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Tutorial',
  shortName: 'Tutorial',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_Tutorial_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.t=_this.timeStop();
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_44,true);
        _this.panel=new Tonyu.classes.kernel.Panel({fillStyle: "black",alpha: 60});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        _this.power=0;
        _this.setumeiText=new Tonyu.classes.kernel.Label({text: "ガリを太らせて\nデブにしよう！\n\n時間内にできるだけ\n太って横綱を目指そう！",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.3,fillStyle: "white",size: 100});
        _this.startText=new Tonyu.classes.kernel.Label({text: "画面タップかクリックでスタート",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,fillStyle: "white",size: 50});
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$touches[0].touched===1) {
            break;
            
          }
          _this.update();
          
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get,2);
        _this.panel.die();
        _this.setumeiText.die();
        _this.startText.die();
        _this.t.releaseAll();
      },
      fiber$main :function _trc_Tutorial_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_Tutorial_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.fiber$timeStop(_thread);
              __pc=2;return;
            case 2:
              _this.t=_thread.retVal;
              
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_44,true);
              _this.panel=new Tonyu.classes.kernel.Panel({fillStyle: "black",alpha: 60});
              _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
              _this.power=0;
              _this.setumeiText=new Tonyu.classes.kernel.Label({text: "ガリを太らせて\nデブにしよう！\n\n時間内にできるだけ\n太って横綱を目指そう！",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.3,fillStyle: "white",size: 100});
              _this.startText=new Tonyu.classes.kernel.Label({text: "画面タップかクリックでスタート",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,fillStyle: "white",size: 50});
            case 3:
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=4     ; break; }
              __pc=6     ; break;
              
            case 4     :
              
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=3;break;
            case 6     :
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_get,2);
              _this.panel.die();
              _this.setumeiText.die();
              _this.startText.die();
              _this.t.releaseAll();
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"t":{},"panel":{},"power":{},"setumeiText":{},"startText":{}}}
});
Tonyu.klass.define({
  fullName: 'user.AlienAttack',
  shortName: 'AlienAttack',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_AlienAttack_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.frame=0;
        _this.ui=new Tonyu.classes.user.AlienUI;
        _this.pl=new Tonyu.classes.user.HanatuDebu({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.1});
        _this.setumeiText=new Tonyu.classes.kernel.Label({text: "スワイプかマウス移動で軌道変更",size: 50,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.9});
        Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
        _this.update();
        while (true) {
          Tonyu.checkLoop();
          if (_this.frame%40===0) {
            _this.i=0;for (; _this.i<3 ; _this.i++) {
              Tonyu.checkLoop();
              {
                new Tonyu.classes.user.Alien({x: _this.rnd(Tonyu.globals.$screenWidth),y: Tonyu.globals.$screenHeight+512*0.5});
              }
            }
            
          }
          if (Tonyu.globals.$tabeta<=0) {
            break;
            
          }
          _this.frame++;
          _this.update();
          
        }
        _this.setumeiText.die();
        _this.ui.die();
        new Tonyu.classes.user.GameOver;
      },
      fiber$main :function _trc_AlienAttack_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_AlienAttack_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.frame=0;
              _this.ui=new Tonyu.classes.user.AlienUI;
              _this.pl=new Tonyu.classes.user.HanatuDebu({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.1});
              _this.setumeiText=new Tonyu.classes.kernel.Label({text: "スワイプかマウス移動で軌道変更",size: 50,fillStyle: Tonyu.globals.$fontColor,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.9});
              Tonyu.globals.$sound.playBGM(Tonyu.globals.$se_k_94,true);
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
            case 3:
              if (_this.frame%40===0) {
                _this.i=0;for (; _this.i<3 ; _this.i++) {
                  Tonyu.checkLoop();
                  {
                    new Tonyu.classes.user.Alien({x: _this.rnd(Tonyu.globals.$screenWidth),y: Tonyu.globals.$screenHeight+512*0.5});
                  }
                }
                
              }
              if (!(Tonyu.globals.$tabeta<=0)) { __pc=4     ; break; }
              __pc=6     ; break;
              
            case 4     :
              
              _this.frame++;
              _this.fiber$update(_thread);
              __pc=5;return;
            case 5:
              
              __pc=3;break;
            case 6     :
              
              _this.setumeiText.die();
              _this.ui.die();
              new Tonyu.classes.user.GameOver;
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"ui":{},"pl":{},"setumeiText":{},"i":{}}}
});
Tonyu.klass.define({
  fullName: 'user.KuimonoGet',
  shortName: 'KuimonoGet',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_KuimonoGet_main() {
        "use strict";
        var _this=this;
        
        _this.init();
        _this.frame=0;
        _this.pl=new Tonyu.classes.user.TaberuDebu({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5});
        new Tonyu.classes.user.KuimonoUI;
        new Tonyu.classes.user.Tutorial;
        while (true) {
          Tonyu.checkLoop();
          _this.frame++;
          Tonyu.globals.$time--;
          if (_this.frame%20===0) {
            _this.i=0;for (; _this.i<3 ; _this.i++) {
              Tonyu.checkLoop();
              {
                new Tonyu.classes.user.TaberuKuimono({x: _this.rnd(Tonyu.globals.$screenWidth),y: Tonyu.globals.$screenHeight+512*0.5,sp: - 10});
              }
            }
            _this.i=0;for (; _this.i<3 ; _this.i++) {
              Tonyu.checkLoop();
              {
                new Tonyu.classes.user.TaberuKuimono({x: _this.rnd(Tonyu.globals.$screenWidth),y: - (512*0.5),sp: 10});
              }
            }
            
          }
          _this.cl=_this.pl.crashTo(Tonyu.classes.user.TaberuKuimono);
          if (_this.cl) {
            Tonyu.globals.$sound.playSE(Tonyu.globals.$se_pa);
            _this.cl.die();
            Tonyu.globals.$tabeta++;
            
          }
          if (Tonyu.globals.$time<=0) {
            break;
            
          }
          _this.update();
          
        }
        Tonyu.globals.$sound.stopBGM();
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_keihou);
        _this.i=0;for (; _this.i<3 ; _this.i++) {
          Tonyu.checkLoop();
          {
            new Tonyu.classes.kernel.FadeEffect({type: "in",fillStyle: "red"});
            _this.update();
            _this.updateEx(30);
          }
        }
        _this.updateEx(30);
        _this.alienText=new Tonyu.classes.kernel.Label({fillStyle: Tonyu.globals.$fontColor,text: "エイリアンの襲来だ！！",size: 200,x: 0,y: Tonyu.globals.$screenHeight*0.5});
        _this.aTextAngle=0;
        while (true) {
          Tonyu.checkLoop();
          _this.aTextAngle+=1;
          _this.alienText.x=Tonyu.globals.$screenWidth*0.5+_this.cos(_this.aTextAngle)*2000;
          if (_this.aTextAngle>180) {
            break;
            
          }
          _this.update();
          
        }
        _this.updateEx(30);
        _this.loadPage(Tonyu.classes.user.AlienAttack);
      },
      fiber$main :function _trc_KuimonoGet_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_KuimonoGet_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$init(_thread);
              __pc=1;return;
            case 1:
              
              _this.frame=0;
              _this.pl=new Tonyu.classes.user.TaberuDebu({x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.5});
              new Tonyu.classes.user.KuimonoUI;
              new Tonyu.classes.user.Tutorial;
            case 2:
              _this.frame++;
              Tonyu.globals.$time--;
              if (_this.frame%20===0) {
                _this.i=0;for (; _this.i<3 ; _this.i++) {
                  Tonyu.checkLoop();
                  {
                    new Tonyu.classes.user.TaberuKuimono({x: _this.rnd(Tonyu.globals.$screenWidth),y: Tonyu.globals.$screenHeight+512*0.5,sp: - 10});
                  }
                }
                _this.i=0;for (; _this.i<3 ; _this.i++) {
                  Tonyu.checkLoop();
                  {
                    new Tonyu.classes.user.TaberuKuimono({x: _this.rnd(Tonyu.globals.$screenWidth),y: - (512*0.5),sp: 10});
                  }
                }
                
              }
              _this.cl=_this.pl.crashTo(Tonyu.classes.user.TaberuKuimono);
              if (_this.cl) {
                Tonyu.globals.$sound.playSE(Tonyu.globals.$se_pa);
                _this.cl.die();
                Tonyu.globals.$tabeta++;
                
              }
              if (!(Tonyu.globals.$time<=0)) { __pc=3     ; break; }
              __pc=5     ; break;
              
            case 3     :
              
              _this.fiber$update(_thread);
              __pc=4;return;
            case 4:
              
              __pc=2;break;
            case 5     :
              
              Tonyu.globals.$sound.stopBGM();
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_keihou);
              _this.i=0;
            case 6:
              if (!(_this.i<3)) { __pc=10    ; break; }
              new Tonyu.classes.kernel.FadeEffect({type: "in",fillStyle: "red"});
              _this.fiber$update(_thread);
              __pc=7;return;
            case 7:
              
              _this.fiber$updateEx(_thread, 30);
              __pc=8;return;
            case 8:
              
            case 9     :
              _this.i++;
              __pc=6;break;
            case 10    :
              
              _this.fiber$updateEx(_thread, 30);
              __pc=11;return;
            case 11:
              
              _this.alienText=new Tonyu.classes.kernel.Label({fillStyle: Tonyu.globals.$fontColor,text: "エイリアンの襲来だ！！",size: 200,x: 0,y: Tonyu.globals.$screenHeight*0.5});
              _this.aTextAngle=0;
            case 12:
              _this.aTextAngle+=1;
              _this.alienText.x=Tonyu.globals.$screenWidth*0.5+_this.cos(_this.aTextAngle)*2000;
              if (!(_this.aTextAngle>180)) { __pc=13    ; break; }
              __pc=15    ; break;
              
            case 13    :
              
              _this.fiber$update(_thread);
              __pc=14;return;
            case 14:
              
              __pc=12;break;
            case 15    :
              
              _this.fiber$updateEx(_thread, 30);
              __pc=16;return;
            case 16:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.AlienAttack);
              __pc=17;return;
            case 17:
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false}},"fields":{"frame":{},"pl":{},"i":{},"cl":{},"alienText":{},"aTextAngle":{}}}
});
Tonyu.klass.define({
  fullName: 'user.GameOver',
  shortName: 'GameOver',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [Tonyu.classes.user.Init],
  methods: function (__superClass) {
    return {
      main :function _trc_GameOver_main() {
        "use strict";
        var _this=this;
        
        _this.t=_this.timeStop();
        _this.panel=new Tonyu.classes.kernel.Panel({fillStyle: "black",alpha: 60});
        _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
        _this.gari=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_debu+3,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.4,scaleX: 4});
        _this.i=_this.gari.scaleX;for (; _this.i>1 ; _this.i+=- 0.1) {
          Tonyu.checkLoop();
          {
            _this.gari.scaleX=_this.i;
            _this.update();
          }
        }
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
        _this.actList=[new Tonyu.classes.kernel.Label({text: "過労！！",size: 250,fillStyle: "white",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,yureHaba: 3})];
        _this.aFPosList = _this.actList.map((function anonymous_529(a) {
          
          return {x: a.x,y: a.y};
        }));
        
        _this.parallel("actBuru");
        ;
        
        _this.updateEx(30);
        Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
        new Tonyu.classes.kernel.Label({template: "倒した数: $breakAlien",size: 100,fillStyle: "white",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 0.1});
        _this.updateEx(60);
        new Tonyu.classes.kernel.Label({text: "タッチかクリックしてリトライ",size: 50,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 0.1});
        while (true) {
          Tonyu.checkLoop();
          if (Tonyu.globals.$touches[0].touched===1) {
            _this.retry();
            _this.loadPage(Tonyu.classes.user.KuimonoGet);
            
          }
          _this.update();
          
        }
      },
      fiber$main :function _trc_GameOver_f_main(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_GameOver_ent_main(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
              _this.fiber$timeStop(_thread);
              __pc=1;return;
            case 1:
              _this.t=_thread.retVal;
              
              _this.panel=new Tonyu.classes.kernel.Panel({fillStyle: "black",alpha: 60});
              _this.panel.fillRect(0,0,Tonyu.globals.$screenWidth,Tonyu.globals.$screenHeight);
              _this.gari=new Tonyu.classes.kernel.Actor({p: Tonyu.globals.$pat_debu+3,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.4,scaleX: 4});
              _this.i=_this.gari.scaleX;
            case 2:
              if (!(_this.i>1)) { __pc=5     ; break; }
              _this.gari.scaleX=_this.i;
              _this.fiber$update(_thread);
              __pc=3;return;
            case 3:
              
            case 4     :
              _this.i+=- 0.1;
              __pc=2;break;
            case 5     :
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
              _this.actList=[new Tonyu.classes.kernel.Label({text: "過労！！",size: 250,fillStyle: "white",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.6,yureHaba: 3})];
              _this.aFPosList = _this.actList.map((function anonymous_529(a) {
                
                return {x: a.x,y: a.y};
              }));
              
              _this.parallel("actBuru");
              ;
              
              _this.fiber$updateEx(_thread, 30);
              __pc=6;return;
            case 6:
              
              Tonyu.globals.$sound.playSE(Tonyu.globals.$se_gunshot);
              new Tonyu.classes.kernel.Label({template: "倒した数: $breakAlien",size: 100,fillStyle: "white",x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.7,yureHaba: 0.1});
              _this.fiber$updateEx(_thread, 60);
              __pc=7;return;
            case 7:
              
              new Tonyu.classes.kernel.Label({text: "タッチかクリックしてリトライ",size: 50,x: Tonyu.globals.$screenWidth*0.5,y: Tonyu.globals.$screenHeight*0.8,yureHaba: 0.1});
            case 8:
              if (!(Tonyu.globals.$touches[0].touched===1)) { __pc=11    ; break; }
              _this.fiber$retry(_thread);
              __pc=9;return;
            case 9:
              
              _this.fiber$loadPage(_thread, Tonyu.classes.user.KuimonoGet);
              __pc=10;return;
            case 10:
              
            case 11    :
              
              _this.fiber$update(_thread);
              __pc=12;return;
            case 12:
              
              __pc=8;break;
            case 13    :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      actBuru :function _trc_GameOver_actBuru() {
        "use strict";
        var _this=this;
        
        while (true) {
          Tonyu.checkLoop();
          _this.aFPosList.map((function anonymous_648(fp,i) {
            var a;
            
            a = _this.actList[i];
            
            a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
            a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
          }));
          _this.update();
          
        }
      },
      fiber$actBuru :function _trc_GameOver_f_actBuru(_thread) {
        "use strict";
        var _this=this;
        //var _arguments=Tonyu.A(arguments);
        var __pc=0;
        
        
        _thread.enter(function _trc_GameOver_ent_actBuru(_thread) {
          if (_thread.lastEx) __pc=_thread.catchPC;
          for(var __cnt=100 ; __cnt--;) {
            switch (__pc) {
            case 0:
            case 1:
              _this.aFPosList.map((function anonymous_648(fp,i) {
                var a;
                
                a = _this.actList[i];
                
                a.x=fp.x+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
                a.y=fp.y+(_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd()+_this.rnd())*a.yureHaba;
              }));
              _this.fiber$update(_thread);
              __pc=2;return;
            case 2:
              
              __pc=1;break;
            case 3     :
              
              _thread.exit(_this);return;
            }
          }
        });
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false},"actBuru":{"nowait":false}},"fields":{"aFPosList":{},"t":{},"panel":{},"gari":{},"i":{},"actList":{}}}
});

//# sourceMappingURL=concat.js.map