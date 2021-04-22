function onedash(token) {
    function wrapped(context){
        return $http.post('https://app.onedash.cc/api/justai/record',
        {
            body: {
                "context": context
            },
            headers: { 'Authorization': token }
        })
    }
    return wrapped;
}
