события в браузере происходят так 

сначала погружение потом всплытие

что бы отловить событие первым обработчиком надо 
передать третьим аргументом `true`
```javascript
outerContainer.addEventListener("click", () => {
		  report("тру");
		}, true);
```

```javascript
{   
  bubbles:     true/false, 
  cancelable:  true/false 
}
```
где:  
`bubbles` - всплывает ли событие,  
`cancelable` – можно ли отменить действие по умолчанию.

> Флаги по умолчанию: `{bubbles: false, cancelable: false}`.