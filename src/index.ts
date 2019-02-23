import SES from 'ses';

export function safeEvaluate(code: string, context?: {}): any {
  const realm = SES.makeSESRootRealm();
  try {
    return realm.evaluate(code, context);
  } catch (err) {
    console.warn('Evaluation error:', err);
  }
}

console.log(safeEvaluate('a + 2', { a: 1 }));
