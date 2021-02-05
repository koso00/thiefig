/*
document.addEventListener('keydown', 
function(e) { 
  if (e.key == "Escape"){
    document.querySelector("#react-root > section > div:nth-child(1) > header > div > div.mXkkY.HOQT4 > a").click();
  }
})*/



console.log("injected because oh shit");
document.querySelector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.oNO81 > div.Igw0E.IwRSH.eGOV_._4EzTm.i0EQd").addEventListener('click', (e) => {
  setTimeout(()=>{
    document.querySelectorAll("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.hLiUi.vwCYk > div > div > div:not([adjusted])")
    .forEach((v)=>{Adjust(v)})
  },400);
  
  console.log(e);
  if (e.target.nodeName === 'IMG' && e.target.parentNode.classList.contains("QzzMF") && !e.target.className.includes("viewer")) {
    // viewer.show(e.target.src.replace('.jpg', '-big.jpg'))
    new Viewer(e.target, {
      inline: false,
      toolbar: false
    });
    e.target.classList.add("viewer-----thingy");
    setTimeout(() => {
      e.target.click();
    }, 1)
  }

})

var mutationObserver = new MutationObserver(function (mutations) {
  if (window.location.href.indexOf("direct/t/") != -1){
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length > 0 && mutation.type == "childList") {
        //console.log(mutation)
        Adjust(mutation.addedNodes.item(0));
        if (mutation.target.tagName == "SECTION") {
          console.log("SECTION");
          setTimeout(() => {
            document.querySelectorAll("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.hLiUi.vwCYk > div > div > div:not([adjusted])")
            .forEach((v)=>{Adjust(v)})
            //console.log(pre_rendered);
          }, 1);
  
        }
      }
    });
  }
  
});





window.addEventListener('hashchange', function (e) { alert('url changed') });

mutationObserver.observe(document.querySelector("#react-root"), {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

window.Adjust = function (dom) {
  dom.setAttribute("adjusted",true)
  //console.log(dom);
  let react = FindReact(dom);
  if (react == null) { return }

  let check = TypeCheck(react, dom);
  if (check == false) { return }
  console.log(check, dom);
  ElaborateDom(dom, check);
  //console.log(check);

}

window.TypeCheck = function (props, dom) {
  //check for vocals
  try {
    let message = props.props.children[1].props.children[1]._owner.memoizedState.itemWithError;
    if (message.item_type == "raven_media") {
      return { type: "raven_media", message: message }
    }
    if (message.item_type == "video_call_event") {
      return { type: "video_call_event", message: message }
    }
    return { type: "voice_media", message: message }
  } catch (_) { }
  try { let message = props.props.children[1].props.children[1]._owner.memoizedProps.children[1].props.message; return { type: "video_call", message: message } }
  catch (_) { }
  try {
    let message = props.props.children[1].props.children.props.message;
    if (message.item_type == "text") { return false; }
    return { type: "media_share", message: message }
  }
  catch (_) { }
  try {
    if (props.$GenericMobileHeader1 !== undefined) {
      window.viewer_id = undefined;
    }
  } catch (_) { }
  try {
    let id = props.props.viewer.id;
    if (window.viewer_id == undefined) {
      try {
        let el = document.createElement("div");
        el.classList.add("subheader");

        el.innerHTML = props.props.recipient.full_name;
        window.full_name = props.props.recipient.full_name;
        console.log(el);

        if (document.querySelector(".subheader") != null) {
          document.querySelector(".subheader").remove();
        }
        if (document.querySelector(".subheader") == null) {
          document.querySelector("#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_.ui_ht.n4cjz > button")
            .appendChild(el);

            /*
            if (old_el != undefined && old_el.getAttribute("elaborated") == undefined){
              let new_el = old_el.cloneNode(true);
              old_el.parentNode.replaceChild(new_el,old_el);
              new_el.setAttribute("elaborated",true);
              new_el.addEventListener("click",()=>{
                document.querySelector("#react-root > section > div.IEL5I > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > form > input").click();
              })
              console.log(new_el);
            }*/
            
        }

      } catch (_) { }
    }
    // Finding the viewer id
    window.viewer_id = id;
    return { type: "chat", message: props }
  } catch (_) { }
  try {

    document.querySelector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > button:nth-child(3)")
            .onclick = (event)=>{
              event.preventDefault();
              event.stopImmediatePropagation();
              event.stopPropagation();

              let input = document.querySelector("#react-root > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div.DPiy6.Igw0E.IwRSH.eGOV_.vwCYk > div.uueGX > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > form > input")
                                  .cloneNode(true);
              input.click();
              input.onchange = ()=>{
                let file = input.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  let img = document.createElement("img");
                  img.setAttribute("src",reader.result);
                  img.classList.add("direct_video");
                  img.classList.add("view_video");
                  document.body.appendChild(img);
                  document.querySelector("#react-root").classList.toggle("opaque");
                  let cropper = new Cropper(img);
                  let fab = document.createElement("div")
                  fab.classList.add("fab_done");
                  document.body.appendChild(fab);
                  fab.onclick = () => {
                    fab.remove();
                    cropper.getCroppedCanvas().toBlob((blob)=>{
                      cropper.destroy();
                      img.remove();
                      let input_orig = document.querySelector("#react-root > section > div.IEL5I > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > form > input")
                      input_orig.value = blob;
                      let evt = document.createEvent("HTMLEvents");
                      evt.initEvent("change", false, true);
                      input_orig.dispatchEvent(evt);
                    });
                    
                  }
                }
              }
              console.log("lol--",event);
            }
    // Initialising prerendered items
    messages = props.$DirectThreadView2.current.children["0"].children;
    document.querySelector("#react-root > section > div.IEL5I > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm > div > div > div > textarea")
            .focus();
    [].forEach.call(messages, (v) => {
      Adjust(v)
    })

  

    
   
  } catch (_) {}


  if (document.querySelector(".subheader") == null && window.full_name != undefined) {
    try {
      let el = document.createElement("div");
      el.classList.add("subheader");

      el.innerHTML = window.full_name;
      document.querySelector("#react-root > section > div:nth-child(1) > header > div > h1 > div > div.Igw0E.IwRSH.eGOV_.ui_ht.n4cjz > button")
        .appendChild(el);
    } catch (_) { }

  }
  /*
  try {
    let message = props.child.child.child.child.child.memoizedProps.threadId;
    return {
      type : "thread",
      message : message
    }
  }catch(_){}
  */
  //console.log(props,dom);
  return false
}

window.ElaborateDom = function (dom, message) {
  if (dom.getAttribute("elaborated") == "true") { return };
  //console.log(dom,message)
  dom.setAttribute("elaborated", "true");
  let el;
  switch (message.type) {
    case "voice_media":
      //console.log("VOCALEEEEEEEEE");
      el = document.createElement("audio");
      el.setAttribute("controls", true);
      el.setAttribute("src", message.message.voice_media.media.audio.audio_src);
      //console.log("VOCALEEEEEEEEE");
      dom.appendChild(el);
      if (message.message.user_id == window.viewer_id) {
        //dom.children[0].style.display = "none";
        el.classList.add("message_by_user");
      } else {
      }
      dom.children[0].style.display = "none";


      break;
    case "raven_media":
      let url;
      let img;
      let view;
      switch (message.message.raven_media.media_type) {

        case 1:
          console.log(dom);
          try {
            url = message.message.raven_media.image_versions2.candidates[0].url;
            dom.querySelector("._7UhW9.PIoXz.MMzan._0PwGv.p1tLr.hjZTB").remove();

            dom.querySelector("._7UhW9.PIoXz.MMzan.KV-D4.uL8Hv").innerHTML = "▶️ Photo";
            img = document.createElement("img");
            img.setAttribute("src", url);
            img.classList.add("direct_video");
            document.body.appendChild(img);

            let view = new Viewer(img, {
              inline: false,
              toolbar: false
            })

            dom.querySelector(".iXTil").addEventListener("click", () => {
              view.show();
            })
            dom.querySelector(".iXTil").classList.add("pointable");
            dom.querySelector(".iXTil > div > div > div").style.marginBottom = "0px";
          }catch(e){
            dom.querySelector("._7UhW9.PIoXz.MMzan._0PwGv.p1tLr.hjZTB").remove();
            dom.querySelector("._7UhW9.PIoXz.MMzan.KV-D4.uL8Hv").innerHTML = "▶️ Expired";
            dom.querySelector(".iXTil").classList.add("pointable");
            dom.querySelector("._7UhW9.PIoXz.MMzan.KV-D4.uL8Hv").style.opacity = 0.7;
          }
          
          break;
        case 2:
          console.log(dom);
          try {

            url = message.message.raven_media.video_versions[0].url;
            dom.querySelector("._7UhW9.PIoXz.MMzan._0PwGv.p1tLr.hjZTB").remove();
            dom.querySelector("._7UhW9.PIoXz.MMzan.KV-D4.uL8Hv").innerHTML = "▶️ Video";
            img = document.createElement("video");
            img.setAttribute("src", url);
            img.setAttribute("loop",true);
            img.classList.add("direct_video");
           
  
            img.addEventListener("click",()=>{
              img.classList.toggle("view_video");
              document.querySelector("#react-root").classList.toggle("opaque");
              img.pause();
              img.remove()
            })
  
            dom.querySelector(".iXTil").addEventListener("click", () => {
              document.body.appendChild(img);
              img.classList.toggle("view_video");
              document.querySelector("#react-root").classList.toggle("opaque");
              img.play();
            })
            dom.querySelector(".iXTil").classList.add("pointable");
            dom.querySelector(".iXTil > div > div > div").style.marginBottom = "0px";
          }catch(e){
            dom.querySelector("._7UhW9.PIoXz.MMzan._0PwGv.p1tLr.hjZTB").remove();
            dom.querySelector("._7UhW9.PIoXz.MMzan.KV-D4.uL8Hv").innerHTML = "▶️ Expired";
            dom.querySelector(".iXTil").classList.add("pointable");
            dom.querySelector("._7UhW9.PIoXz.MMzan.KV-D4.uL8Hv").style.opacity = 0.7;

          }
          break;
      }
      break;
  }
}


window.FindReact = function (dom, traverseUp = 0) {
  const key = Object.keys(dom).find(key => key.startsWith("__reactInternalInstance$"));
  const domFiber = dom[key];
  if (domFiber == null) return null;

  // react <16
  if (domFiber._currentElement) {
    let compFiber = domFiber._currentElement._owner;
    for (let i = 0; i < traverseUp; i++) {
      compFiber = compFiber._currentElement._owner;
    }
    return compFiber._instance;
  }

  // react 16+
  const GetCompFiber = fiber => {
    //return fiber._debugOwner; // this also works, but is __DEV__ only
    let parentFiber = fiber.return;
    while (typeof parentFiber.type == "string") {
      parentFiber = parentFiber.return;
    }
    return parentFiber;
  };
  let compFiber = GetCompFiber(domFiber);
  for (let i = 0; i < traverseUp; i++) {
    compFiber = GetCompFiber(compFiber);
  }
  return compFiber.stateNode;
}


document.addEventListener("fullscreenchange",(event)=>{
  event.preventDefault();
  event.stopImmediatePropagation();
  document.exitFullscreen();
  //console.log(event);
})

window.IgRequest =  {
  requestExternalFile: function(a, b, c) {
      var d = new XMLHttpRequest;
      d.open("GET", a, !0), d.responseType = "arraybuffer", d.onreadystatechange = function() {
          if (4 === this.readyState && 200 === this.status) try {
              var a = this.response || this.responseText,
                  d = new Blob([a], {
                      type: "application/octet-stream"
                  });
              x.uploadRequest.factory(b, d, c)
          } catch (e) {}
      }, d.send()
  },
  sendExternalImage: function(a, b, c) {
      var d = this;
      d.requestExternalFile(a, b, c)
  },
  isValidLink: function(a) {
      return !!a.match(/^https?:\/\/(www\.)?[^\.]+\.[^\.]+/)
  },
  uploadRequest: {
      factory: function(a, b, c) {
          var d = this;
          d.sendPhoto(b, function(b) {
              b.error ? d.handleBadResponse(b) : d.configurePhoto({
                  uploadId: b.upload_id,
                  threadId: a
              }, function(a) {
                  a.error && d.handleBadResponse(a), c()
              })
          })
      },
      sendPhoto: function(a, b) {
          chrome.runtime.sendMessage("getCookies", function(c) {
              if (c) {
                  var d = x.size && x.size.width || 1080,
                      e = x.size && x.size.height || 1080,
                      f = (new Date).getTime(),
                      g = "https://www.instagram.com/rupload_igphoto/direct_" + f,
                      h = new XMLHttpRequest;
                  h.open("POST", g, !0), h.setRequestHeader("x-csrftoken", c.csrftoken), h.setRequestHeader("x-entity-length", a.size), h.setRequestHeader("x-entity-name", "direct_" + f), h.setRequestHeader("x-ig-app-id", "1217981644879628"), h.setRequestHeader("x-instagram-rupload-params", JSON.stringify({
                      media_type: 1,
                      upload_id: f,
                      upload_media_height: e,
                      upload_media_width: d
                  })), h.setRequestHeader("offset", 0), h.onload = function() {
                      try {
                          var a = JSON.parse(this.responseText)
                      } catch (c) {
                          return b({
                              error: 1,
                              status: 200
                          })
                      }
                      b(a)
                  }, h.send(a)
              }
          })
      },
      configurePhoto: function(a, b) {
          var c = a.uploadId,
              d = a.usertags,
              e = a.threadId;
          chrome.runtime.sendMessage("getCookies", function(a) {
              if (!a || !a.sessionid) return b({
                  error: 1
              });
              var f = {
                  upload_id: c,
                  action: "send_item",
                  allow_full_aspect_ratio: 1,
                  content_type: "photo",
                  sampled: 1,
                  thread_id: e
              };
              d && (f.usertags = JSON.stringify({
                  "in": d
              }));
              var g = "https://www.instagram.com/direct_v2/web/threads/broadcast/configure_photo/";
              $.ajax({
                  url: g,
                  method: "POST",
                  data: f,
                  headers: {
                      "x-csrftoken": a.csrftoken,
                      "x-ig-app-id": "1217981644879628"
                  }
              }).done(function(a) {
                  return a && "object" == typeof a && "ok" == a.status ? void b({
                      success: 1
                  }) : b({
                      error: 1,
                      res: a,
                      status: 200
                  })
              }).fail(function(a) {
                  b({
                      error: 1,
                      res: a.responseJSON,
                      status: a.status
                  })
              })
          })
      },
      handleBadResponse: function(a) {}
  }
}