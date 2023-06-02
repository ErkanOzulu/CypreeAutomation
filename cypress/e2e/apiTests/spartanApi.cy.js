
describe('Spartan API Tests',{baseUrl:"http://3.238.70.42:8000/"},()=>{

it('GET a single spartan',()=>{

    cy.request('GET','api/spartans/10').then((response)=>{
       
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal("Lorenza");
    })
});


it('POST one spartan test',()=>{

    cy.request({
        method:'POST',
        url:'api/spartans',
        body:{
            "gender":"Male",
            "name":"Ahmet",
            "phone":3435674568
        },
        failOnStatusCode: false
    }).then((response)=>{
        expect(response.status).to.equal(201);
        expect(response.body.success).to.equal("A Spartan is Born!");
        expect(response.body.data.name).to.equal("Ahmet");
    })
})

})