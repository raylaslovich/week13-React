import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div class="col">
                <form>
                    <h3>Login</h3>
                    <div class="form-group row">
                        <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail" placeholder="Username"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
