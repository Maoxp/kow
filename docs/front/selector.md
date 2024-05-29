# Jquery Selectors

整理常规使用中的一些选择器，方便记忆，具体[API Documentation](https://api.jquery.com/category/selectors/)，请查看官网。

```javascript
// 选择 id="myElement" 元素
$("#myELement")    

/* 表单元素过滤选择器 */
// 选择所有 type="xxx" input元素
$(":password") 
$(":radio")       
$(":checkbox")
$(":submit")        
$(":image")
$(":reset")
$(":button")
$(":file")
$(":hidden")
// 选择所有 [不]可操作的input元素 
$("input:enabled") or $(":disabled")
// 选择所有的被checked的表单元素 
$(":checked")
// 选择所有的 select 中被 selected的元素
$("select option:selected")

// 选取一个 name=”S_03_22″ or name=”S_03_22″的 input元素
$("input[name='S_03_22']") or $("input[name!='S_03_22']")
// 选取名字以”S_”开始，并且不是以”_R”结尾的 input元素
$("input[name^='S_']").not("[name$='_R']")
// 选取一个名为 radio_01 的radio所选的值
$("input[name='radio_01'][checked]").val();

// 选取Attribute name包含”value“的 input元素
$("input[name*='man']") // eg: <input name="milk man">， <input name="milkman">
// 选取Attribute name包含”value“("value"is a given word, delimited by spaces)的input元素。
$("input[name~='man']") // eg: <input name="milk man">


HTML 代码:
<form>
    <label>Name:</label>
    <input name="name" />

    <fieldset>
        <label>Newsletter:</label>
        <input name="newsletter" />
        <input name="letter2" />
    </fieldset>

    <input name="other" />
</form>
<input name="none" />
<input name="none2" />

// 查找 form元素 内的 所有 input的子节点
$("form input"); // result: [<input name="name">, <input name="newsletter">, <input name="letter2">]
// $("form input:first") // result: [<input name="name">]
// $("form input:last") // result: [<input name="other">]

// 查找 parent元素"form" 内的 child元素"input", 仅限第一个后代child元素
$("form > input") // result: [<input name="name">]

// 查找匹配：label元素之后 全部与之同级的兄弟节点元素“input“（
$("label ~ input") // result: [<input name="name">], <input name="newsletter">, <input name="letter2">] 

// 查找匹配：label元素之后input元素中，match of first element.
$("label + input")  // result: [<input name="name">, <input name="newsletter">]

```
