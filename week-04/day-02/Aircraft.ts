'use strict';

export class Aircraft {
  private type: string;
  private ammo: number;
  private maxAmmo: number;
  private baseDamage: number;

  constructor(type: string, maxAmmo: number, damage: number) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = damage;
    this.ammo = 0;
  }
  fight(): number {
    let damage: number = this.ammo * this.baseDamage;
    this.ammo = 0;
    return damage;
  }

  refill(amount: number): number {
    let difference: number = this.maxAmmo - this.ammo;
    this.ammo = this.ammo + difference;
    return amount - difference;
  }

  getType(): string {
    return this.type;
  }

  getMaxDamage(): number {
    return this.baseDamage * this.ammo;
  }

  getStatus(): string {
    return (`Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.getMaxDamage()}`);
  }

  isPriority(): boolean {
    return false;
  }
}