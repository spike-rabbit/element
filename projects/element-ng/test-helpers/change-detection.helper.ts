import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

/**
 * Force test component which use the onPush detection strategy to check for
 * changes and wait until they are applied.
 * This is a workaround since onPush components don't detect changes when calling:
 * `fixture.detectChanges();`
 *
 * @see https://github.com/angular/angular/issues/12313
 * @param cf - test fixture
 * @return promise
 */
export const runOnPushChangeDetection = async <T>(cf: ComponentFixture<T>) => {
  const cd = cf.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef as any);
  cd.detectChanges();
  await cf.whenStable();
  return;
};
