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
}
