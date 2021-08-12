const{
    Rover
} = require("./rover");
let rover;
beforeEach(() => {
    rover = new Rover();
});
decribe("rover",()=>{
    it("Has start position of 0", ()=>{
        expect(rover.direction).toEqual(0);

    }
    );
    it("Can move given instructions",() =>{
        expect(rover.startPosition).toEqual([0,0]);
        rover.move('LMRMM');
        expect(rover.startPosition).toEqual([0,2]);
    });
    it("Translates moving right",()=>{
    rover.translateInstructions(["L","L","R"]);
    expect(rover.direction).toEqual(-1);
    });
        it("Can move correctly ",()=>{
            rover.move("M");
            expect(rover.startPosition).toEqual([0,1]);
            rover.move("RM");
            expect(rover.startPosition).toEqual([1,1]);
            rover.move("RM");
            expect(rover.startPosition).toEqual([1,0]);
            rover.move("RM");
            expect(rover.startPosition).toEqual([0,0]);
            rover.move("M");
            expect(rover.startPosition).toEqual([9,0]);
            rover.move("LM");
            expect(rover.startPosition).toEqual([9,9]);
            rover.move("RRM");
            expect(rover.startPosition).toEqual([9,0]);
            rover.move("RM");
            expect(rover.startPosition).toEqual([0,0]);


        });
        it("says when invalid command is provided",()=>{
            expect(() => rover.move("X")).toThrowErrorMatchingSnapshot();

        })
})
