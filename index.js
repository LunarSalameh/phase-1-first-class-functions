function receivesAFunction(fun) { fun() };

receivesAFunction(function spy() {
    console.log("Callback function");
});

function returnsANamedFunction() {
    function f2() {
        console.log("");
    }
    return f2;
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log("anonymous function returned");
    };
}

returnsANamedFunction();
