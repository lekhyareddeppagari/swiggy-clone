import { sum } from "../sum";

test("sum function should calculate sumof two numbers" , ()=>{
    const result=sum(2,3);

    expect(result).toBe(5);
})