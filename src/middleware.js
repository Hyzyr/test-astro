export function onRequest(context, next) {
  context.locals.requestDate = new Date();
  context.locals.mText = 'get date';

  return next();
}
