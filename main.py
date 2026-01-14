from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class CalcRequest(BaseModel):
    num1: float
    num2: float
    operator: str

@app.post("/calculate")
def calculate(data: CalcRequest):
    if data.operator == "+":
        result = data.num1 + data.num2
    elif data.operator == "-":
        result = data.num1 - data.num2
    elif data.operator == "*":
        result = data.num1 * data.num2
    elif data.operator == "/":
        if data.num2 == 0:
            return {"result": "Error"}
        result = data.num1 / data.num2
    else:
        return {"result": "Invalid operator"}

    return {"result": result}
