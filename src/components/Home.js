import React, { Component} from 'react';
import './Home.css';

export  class Home extends Component {
    static displayName = Home.name;

    constructor(props) {

        super(props);
        this.state = {
            cov1: '♀', cov2: '♂', cov3: '☹', cov4: '☺', cov5: '☻', cov6: '〠', cov7: 'ヅ', cov8: 'ツ', cov9: '㋡', cov10: '웃', cov11: '유', cov12: 'ü', cov13: 'Ü', cov14: 'シ', cov15: 'ッ', cov16: '㋛', cov17: '☐', cov18: 'ꑇ', cov19: 'ꐕ', cov20: 'ꌇ', cov21: 'ꌈ', cov22: 'ꉕ', cov23: 'ꈋ', cov24: 'ꈌ', cov25: 'ꆛ', cov26: 'ꆜ', cov27: 'ꃼ', cov28: '☠', cov29:'☃', cov30: '〲', cov31: '〴', cov32: 'ϡ', cov33: '⍢', cov34: '⍣', cov35: '⍤', cov36: '⍥', cov37: '⍨', cov38:'⍩', cov39:'ὃ', cov40:'ὕ', cov41:'ὣ', cov42:'Ѷ', cov43:'Ӫ', cov44:'ӫ', cov45:'℀', cov46:'৳', cov47:'≝', cov48:'≄',

            houg: false,
            put4: '',
            timer: 0, inko: true, unko: false, minute: '', time: {}, seconds: 60, currentCount: '', vistext: 'good', ipoints: '0', dpoints: '0', result1: 'good', inpucl: ''
        };

        this.incrementCounter = this.incrementCounter.bind(this);
        this.incrementCounter1 = this.incrementCounter1.bind(this);
        this.restart = this.restart.bind(this);

        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.Makeid = this.Makeid.bind(this);
       
    }
    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.state.timer == 0 && this.state.seconds > 0) {
            this.state.timer = setInterval(this.countDown, 1000);

        }
    }
    restart() {
        this.setState({
            currentCount: '',
            result1:'good',
            seconds: 60,
            unko: false,
            inko: true,
            ipoints: '0',
            dpoints: '0',
            inpucl: '',
            minute: '',
            timer: 0,
            houg: false
        });

    }
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.

        if (seconds == 0) {
            clearInterval(this.state.timer);


        }
    }
    incrementCounter(event) {
        this.setState({
            currentCount: event.target.value
        });
    }
    incrementCounter1(event) {
        this.setState({
            inpucl: event.target.value
        });
    }
    minuteset(event) {
        this.setState({

            minute: event.target.value
        })

    }



    Makeid(len = this.state.inpucl) {
        var result = ''
        var characters = this.state.put4;
        var charactersLength = characters.length;
        for (var i = 0; i < len; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        this.setState({ result1: result });

    }

    textchecker() {
        if (this.state.currentCount == this.state.result1) {
          
            return (
                <div>
                    <h1>yes your word is correct</h1>
                  
                </div>
            );
        }
        else {
            return (
                <h1>no your word is wrong</h1>
                );
        }
    }
    pointcoun(event) {
        if (event.key === 'Enter') {
            this.setState({
                currentCount: ''
            });
            this.Makeid();
            if (this.state.currentCount == this.state.result1) {
                this.setState({ ipoints: + this.state.ipoints + 1 });
            }
            else {
                this.setState({ dpoints: + this.state.dpoints + 1 });
            }
        }
        else {
            
            console.log('key pressed');
        }
    }
   
    render() {
        if (this.state.seconds > 0) {
            if (this.state.inko) {
               
                return (
                    <>
                    <div className='firstpageimage' >
                            <img className='firstpageimagein' src='http://unitedbloggers.no/uploads/sites/184/2016/05/steve-jobs-walter-isaacson.jpg'></img>
                        </div>
                     
                        <div className='firstpaged'>
                            <h1 className='firstpageh'><span>Hello</span> lovely <span>Blankers</span></h1>
                            <h1 className='firstpageh'><span>Enjoy</span> The <span>Game!</span></h1>
                            <h1 className='firstpageh'><span>Stay Hungry</span> </h1>
                            <h1 className='firstpageh'> Thank you <span>Stay Foolish</span> </h1>
                        </div>
                        <h1 className='disclamer'>Must Do: 1.Please fill the form to move forward.</h1>
                        <h1 className='disclamer1'> 2.Please fill the Problem Password size box to move forward.</h1>
                    <div className='firstpage'>
                       
                            <div class="form__group ">
                      
                                <label for='name' class="label">Problem  Size:</label>
                                <input placeholder='Size' class="form__field" id='name' type='number' value={this.state.inpucl} onChange={(e) => this.incrementCounter1(e)}></input>

                          
                                <label class="label">Time limit(in min):</label>
                                <input placeholder='Minute' class="form__field" value={this.state.minute} type='number' onChange={(e) => this.minuteset(e)}></input>

                        </div>

                            <div className='firstpagebutton'>
                            <button className='firstpagebuttonin' onClick={() => {
                                if (this.state.inpucl == '') {
                                    <h1>fill the word size</h1>
                                }
                                else {
                                    this.setState({ inko: false })
                                }
                                }}>Next</button>
                            </div>
                            
                   </div>
                    </>
                    );
             
            }
            else {
                if (this.state.unko) {
                    this.startTimer()
                    return (
                        <>
                            <div className='thirdpageimage'>
                                <img className='thirdpageimagein' src='https://wallpapercave.com/wp/wp3326903.jpg'></img>
                            </div>
                            <div className='thirdpagetime'>
                                <h2>Time Limit: M:{this.state.time.m} s:{this.state.time.s}</h2> 
                            </div>
                        <div className='thirdpage'>
                                <div className='thirdpageplayingwords'>
                                    <h1 style={{ userSelect: "none" }}> Your Problem Password:</h1>

                                </div>

                                <div className='thirdpageplayingwords1'>
                                    <h1 style={{ userSelect: "none" }}>{this.state.result1}</h1>
                                </div>

                                <div className='thirdpagesearchbox'>
                                    <label>Your Text:</label>
                                    <input type='password' value={this.state.currentCount} onChange={(e) => this.incrementCounter(e)} onKeyDown={(e) => this.pointcoun(e)}></input>
                            </div>
                                <div className='head'>
                                    <h3>Hint:Please Write Problem Password in the text box to earn points before Your Time Limit gets Over</h3>
                                    <h2>To Submit Your Password Click Enter Button</h2>

                                </div>
                                <div className='disclamer2'>
                                    <h3>Please click Below buttons to copy Non-keyboard Symbols:</h3>

                                </div>
                            <div className='thirdpagecopyline1'>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov1) }}>♀</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov2) }}>♂</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov3) }}>☹</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov4) }}>☺</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov5) }}>☻</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov6) }}>〠</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov7) }}>ヅ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov8) }}>ツ</button>
                                <button onClick={() => { navigator.clipboard.writeText(this.state.cov9) }}>㋡</button>
                         
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov10) }}>웃</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov11) }}>유</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov12) }}>ü</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov13) }}>Ü</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov14) }}>シ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov15) }}>ッ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov16) }}>㋛</button>
                           
                            </div>
                                <div className='thirdpagecopyline2'>
                                    <button onClick={() => { navigator.clipboard.writeText(this.state.cov17) }}>☐</button>
                                    <button onClick={() => { navigator.clipboard.writeText(this.state.cov18) }}>ꑇ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov19) }}>ꐕ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov20) }}>ꌇ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov21) }}>ꌈ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov22) }}>ꉕ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov23) }}>ꈋ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov24) }}>ꈌ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov25) }}>ꆛ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov26) }}>ꆜ</button>
                                <button onClick={() => { navigator.clipboard.writeText(this.state.cov27) }}>ꃼ</button>
                           
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov28) }}>☠</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov29) }}>☃</button> 
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov30) }}>〲</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov31) }}>〴</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov32) }}>ϡ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov33) }}>⍢</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov34) }}>⍣</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov35) }}>⍤</button>
                                    <button onClick={() => { navigator.clipboard.writeText(this.state.cov36) }}>⍥</button>
                                    <button onClick={() => { navigator.clipboard.writeText(this.state.cov37) }}>⍨</button>
                                    <button onClick={() => { navigator.clipboard.writeText(this.state.cov38) }}>⍩</button>
                                    <button onClick={() => { navigator.clipboard.writeText(this.state.cov39) }}>ὃ</button>
                                    <button onClick={() => { navigator.clipboard.writeText(this.state.cov40) }}>ὕ</button>
                            </div>
                            <div className='thirdpagecopyline3'>
                          
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov41) }}>ὣ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov42) }}>Ѷ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov43) }}>Ӫ</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov44) }}>ӫ</button>
                                <button onClick={() => { navigator.clipboard.writeText(this.state.cov45) }}>℀</button>
                            
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov46) }}>৳</button>
                            <button onClick={() => { navigator.clipboard.writeText(this.state.cov47) }}>≝</button>
                                <button onClick={() => { navigator.clipboard.writeText(this.state.cov48) }}>≄</button>
                            </div>
                            </div>
                            </>
                    );
                }
            
                return (
                    <>
                        <div className='secondpageimage'>
                            <img className='secondpageimagein' src='https://wallpaperaccess.com/full/2089149.jpg'></img>
                        </div>
                    <div className='secondpage'>
                     
                        <form className='secondpageform'>
                            <div className='secondpageheadinglevel'>
                                <h1>Please Select Level:</h1>
                            </div>
                            <div className='secondpageeasylevel'>
                            <label>Easy</label>
                            <input type='radio' name='user' value='he1' onClick={() => {
                            this.setState({
                                put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
                                houg: true
                            })
                                }}></input>
                            </div>

                            <div className='secondpagemediumlevel'>
                            <label>Medium</label>
                        <input type='radio' name='user' value='he2' onClick={() => {
                            this.setState({
                                put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=',
                                houg: true
                            })
                                }}></input>
                            </div>

                            <div className='secondpagehardlevel'>
                            <label>Hard</label>
                        <input type='radio' name='user' value='he3' onClick={() => {
                            this.setState({
                                put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:;|\)(?.][%$#@!~`₹^&*-+_',
                                houg: true
                            })
                                }}></input>
                            </div>

                            <div className='secondpageextremelevel'>
                            <label>Extreme</label>
                        <input type='radio'name='user' value='he4' onClick={() => {
                            this.setState({
                                put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:;|\)(?.][%$#@!~`₹^&*-+_♀♂☹☺☻〠ヅツ㋡웃유üÜシッ㋛͟ꑇꐕꌇꌈꉕꈋꈌꆛꆜꃼ☠☃〲〴ϡ⍢⍣⍤⍥⍨⍩ὃὕὣѶӪӫ℀৳≝≄',
                                houg: true
                            })
                                }}></input>
                            </div>
                        </form>
                        <div className='secondpagebutton'>
                            <button className='secondpagebuttonin' onClick={() => {
                                if (this.state.houg) {
                                    this.setState({
                                        unko: true,
                                        seconds: this.state.seconds * this.state.minute,
                                    })
                                }
                            }}>Start</button>
                        </div>
                        </div>
                    
                </>
                );

            }
     
          
        }
        else {

           
            return (
                <div className='fourthpage'>
                    <div className='fourthpageppm'>
                    <h1> PPM:{this.state.ipoints / this.state.minute}
                        </h1>
                    </div>
                    <div className='fourthpagecorrectpoints'>
                        <h1>Correct Points:{this.state.ipoints}</h1>
                    </div>
                    <div className='fourthpageincorrectpoints'>
                        <h1>Incorrect Points:{this.state.dpoints}</h1>
                    </div>
                    <div className='fourthpagerestartbuttton'>
                        <button onClick={this.restart}>Restart</button>
                    </div>
                </div>
                    );
               
        }
  }
}