/**
 * Created by zmk on 2017/8/16.
 */

/**
 *
 * @param max  队列长度
 */
var queue=function LinkedQueue(max){
    /**
     * 一个单链表的基本节点
     * @param element
     */
    function Node(key,element={}){
        this.key=key;
        this.element=element;
        this.next=null;
    }


    //定义三个私有属性，来确定长度，首尾
    var front,
        rear,
        length=0,
        keys={};

    /**
     * 获取队列长度
     * @returns {number}
     */
    this.size=function(){
        return length;
    };
    /**
     * 往里添加节点，添加到末尾，长度加1
     * @param element
     */
    this.push=function(key,element){
        if(max&&max===0||max<length)return false;//max=0
        if(this.contains(key)){
            console.error("push error:","已经有了相同的key:"+key);
           return false;
        }
        keys[key]=1;

        let current=new Node(key,element);

        if(length===0){//length=0
            front=current;
            rear=front;
            length++;
            return true;

        }

        if(max&&max===length){//达到最大长度，边进边出
            keys[front.key]=null;
            front=front.next;


            rear.next=current;
            rear=current;
            return true;

        } else{//未达到长度，直接加
            rear.next=current;
            rear=current;
            length++;
            return true;
        }
    }

    /**
     * 出队列,长度减1
     */
    this.pop=function(){
        if(this.size()===0)return null;
        length--;

        let result=front;
        front=front.next;
        keys[result.key]=null;

        return result.element;
    }

    /**
     * 遍历队列
     * @param callback
     */
    this.map=function(callback){
        if(length===0)return;
          let temp=front,
              cout=0;
          while(temp.next!=null){
              if(callback(temp,cout)) return {item:temp,cout:cout}    ;

              temp=temp.next;
              cout++;
          }
          if(temp.next===null){
             if(callback(temp,cout)) return {item:temp,cout:cout}    ;
        }
    }

    /**
     * 是否包含某key
     * @param key
     * @returns {boolean}
     */
    this.contains=function(key){
      return  keys[key]!=null;
    }

    this.getValue=function(key){
        let result=null;
       this.map(function(item){
                if(item.key===key){
        
                    result=item.element;
                    return;
                }
       })
       return result;
    }
}

module.exports=queue;



// var queue=new queue();
//
// queue.push(1,"1");
// queue.push(2,"2");
// queue.push(3,"3");
// queue.push(4,"4");
// queue.push(5,"5");
// console.log("size is: "+queue.size());
//
// queue.map(function(data,count){
//         if(count===4)return false;
//      console.log("coun"+data.key+" is:  "+data.element);
// })
//
//
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());
//
// queue.map(function(data,count){
//     console.log("coun"+data.key+" is:  "+data.element);
// })
//
//   queue.push(3,"3");
//
//
// queue.push(4,"4");
// queue.map(function(data,count){
//
//           console.log("coun"+data.key+" is:  "+data.element);
// })
//

//console.log(queue.isContain("4"));


