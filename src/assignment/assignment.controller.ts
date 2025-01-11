import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);
    const sequence = this.calculateFibonacci(num);
    return { sequence };
  }

  private calculateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }

    @Get('prime/:number')
    checkPrime(@Param('number') number: string): { isPrime: boolean } {
        const num = parseInt(number, 10);
        const isPrime = this.isPrimeNumber(num);
        return { isPrime };
    }

    private isPrimeNumber(num: number): boolean {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; //if it's divisible then it's not a prime
        }
        return true; //if can not be divided by any number, it’s prime
    }

    @Get('factorial/:number')
    calculateFactorial(@Param('number') number: string): { factorial: number } {
        const num = parseInt(number, 10);
        const factorial = this.factorial(num);
        return { factorial };
    }
  
    private factorial(num1: number): number {
        if (num1 === 0 || num1 === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num1; i++) {
            result *= i;
        }
        return result;
    }
}
