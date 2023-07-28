program puzzlecalculator.aleo;

function addition: //add is a reserved opcode so we use addition
    input r0 as i32.private;
    input r1 as i32.private;
    add r0 r1 into r2;
    output r2 as i32.private;

function subtract: 
    input r0 as i32.private;
    input r1 as i32.private;
    sub r0 r1 into r2;
    output r2 as i32.private;

function multiply: 
    input r0 as i32.private;
    input r1 as i32.private;
    mul r0 r1 into r2;
    output r2 as i32.private;

function divide: 
    input r0 as i32.private;
    input r1 as i32.private;
    div r0 r1 into r2;
    output r2 as i32.private;