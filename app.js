document.getElementById('btnid').addEventListener('click', () => {
    let input = Number(document.getElementById('input').value);
    for (let i = 0; i < input; i++) {
        let div=document.createElement( 'div' );
        let username = document.createElement('input');
        username.setAttribute("type", "text");
        username.setAttribute("name", `username${i}`);
        username.setAttribute("placeholder", "Enter UserName");
        
        let pass = document.createElement('input');
        pass.setAttribute("type", "password");
        pass.setAttribute("name", `pass${i}`);
        pass.setAttribute("placeholder", "Password");
        
        let btn = document.createElement('input');
        btn.setAttribute("type", "button");
        btn.setAttribute('value', 'submit');
        div.className='col'

        div.append(username, pass, btn);
        document.getElementById('divid').appendChild(div)
    }
});
