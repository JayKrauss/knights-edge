    register () {
        const validate = this.refs.form.getValue();
        if(this.validate) {
            const errorHandler = ((e)=>{
            console.log(e);
            if(e.code == 'auth/email-already-in-use'){
                Toast.show({ text: `${Strings.ST36}`, position: 'bottom', buttonText: `${Strings.ST33}` })
            } else {
                Toast.show({ text: `${Strings.ST32}`, position: 'bottom', buttonText: `${Strings.ST33}` })
            }
        })
        firebase.auth().createUserWithEmailAndPassword(validate.email,validate.password).then((response) => {
            firebase.auth().currentUser.updateProfile({
                displayName : validate.name,
            }).then(()=>{
                firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/profile").set(firebase.auth().currentUser);
            }).catch(errorHandler);
        }).catch(errorHandler)
    }}