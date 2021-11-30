import React, { Component } from 'react';
import './Password.css';
export class Passwordmaker extends Component {
    static displayName = Passwordmaker.name;

    constructor(props) {
        super(props);
        this.state = { value: 'god', long: '', Password: '', word: '' };
        this.Makeid = this.Makeid.bind(this);
    }

    Makeid() {
        var result = ''
        var characters = this.state.word;
        var charactersLength = characters.length;
        for (var i = 0; i < this.state.long; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        this.setState({ Password: result });

    }

    render() {


        return (
            <>
              
            <div className='Page'>
                <div className='he'>
                    <h1>Please Choose For What Work You Want Password from Below Options:</h1>
                </div>
                <form>
                    <div className='options1'>
                <label>Password for email and Website Signup then click this:-</label>
                <input type='radio' name='user' value='he2' onClick={() => {
                    this.setState({
                        word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/='
                       
                    })
                        }}></input>
                        </div>
                    <div className='options1'>
                <label>Password for Wifi and other security reason then click this:-</label>
                <input type='radio' name='user' value='he3' onClick={() => {
                    this.setState({
                        word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:;|\)(?.][%$#@!~`₹^&*-+_'
                      
                    })
                        }}></input>
                        </div>
                    <div className='options1'>
                <label for='ho'>Password for one time use because Password's Some characters not found on keyboard then click this:-</label>
                <input type='radio' id='ho' name='user' value='he4' onClick={() => {
                    this.setState({
                        word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:;|\)(?.][%$#@!~`₹^&*-+_♀♂☹☺☻〠ヅツ㋡웃유üÜシッ㋛͟ꑇꐕꌇꌈꉕꈋꈌꆛꆜꃼ☠☃〲〴ϡ⍢⍣⍤⍥⍨⍩ὃὕὣѶӪӫ℀৳≝≄'
                       
                    })
                        }}></input>
                        </div>
                    <div className='passwordsize'>
                    <label>Password size:</label>
                    <input type='number' onChange={(e) => {
                        this.setState({
                            long: e.target.value
                        })
                        }}></input>
                    </div>
                </form>
                <div className='he2'>
                    <h4> Click Generate button to create your password:</h4>

                    <button onClick={this.Makeid}>Generate</button>
                </div>
                <div className='password'>
                    <h3> Your password:</h3>
                </div>
                    <div className='password1'>
                    <h2>{this.state.Password}</h2>
                </div>
                <div className='passwordbutton'>
                    <button onClick={this.Makeid}>Change</button>
                    <button onClick={() => { navigator.clipboard.writeText(this.state.Password) }}>COPY</button>
               </div>
               
                <p> *if you does not like this password then click on the Change button</p>
                </div>
                </>
        );
    }

}