import { IServiceLocator } from '@aurelia/kernel';
import { LifecycleState } from '../lifecycle-state';
import { hasBind, hasUnbind, IsBindingBehavior, StrictAny } from './ast';
import { IBinding, IBindingTarget } from './binding';
import { IScope } from './binding-context';
import { BindingFlags } from './binding-flags';
import { IConnectableBinding } from './connectable';
import { IBindScope } from './observation';

export interface Ref extends IConnectableBinding {}
export class Ref implements IBinding {
  public $nextBindable: IBindScope = null;
  public $prevBindable: IBindScope = null;

  public $state: LifecycleState = LifecycleState.none;

  public $scope: IScope;

  constructor(
    public sourceExpression: IsBindingBehavior,
    public target: IBindingTarget,
    public locator: IServiceLocator) {
  }

  public $bind(flags: BindingFlags, scope: IScope): void {
    if (this.$state & LifecycleState.isBound) {
      if (this.$scope === scope) {
        return;
      }

      this.$unbind(flags);
    }
    // add isBinding flag
    this.$state |= LifecycleState.isBinding;

    this.$scope = scope;

    const sourceExpression = this.sourceExpression;
    if (hasBind(sourceExpression)) {
      sourceExpression.bind(flags, scope, this);
    }

    this.sourceExpression.assign(flags, this.$scope, this.locator, this.target);

    // add isBound flag and remove isBinding flag
    this.$state |= LifecycleState.isBound;
    this.$state &= ~LifecycleState.isBinding;
  }

  public $unbind(flags: BindingFlags): void {
    if (!(this.$state & LifecycleState.isBound)) {
      return;
    }
    // add isUnbinding flag
    this.$state |= LifecycleState.isUnbinding;

    if (this.sourceExpression.evaluate(flags, this.$scope, this.locator) === this.target) {
      this.sourceExpression.assign(flags, this.$scope, this.locator, null);
    }

    const sourceExpression = this.sourceExpression;
    if (hasUnbind(sourceExpression)) {
      sourceExpression.unbind(flags, this.$scope, this);
    }

    this.$scope = null;

    // remove isBound and isUnbinding flags
    this.$state &= ~(LifecycleState.isBound | LifecycleState.isUnbinding);
  }
  // tslint:disable:no-empty no-any
  public observeProperty(obj: StrictAny, propertyName: StrictAny): void { }
  public handleChange(newValue: any, previousValue: any, flags: BindingFlags): void { }
  // tslint:enable:no-empty no-any
}
