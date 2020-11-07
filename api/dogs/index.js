module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const dogs = [
        { name: 'Azure' },
        { name: 'Sammy' },
        { name: 'Roscoe' }
    ];

    context.res = {
        body: { dogs: dogs },
        headers: { 'Content-Type': 'application/json' }
    }
}