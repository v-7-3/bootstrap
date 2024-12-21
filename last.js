      const metaTag = document.createElement("meta");
      metaTag.name = "monetag";
      metaTag.content = "cf8cb8e5b5c695fd82ceca20957856eb";
      
      // إضافة عنصر meta إلى وسم <head>
      if (document.head) {
        document.head.appendChild(metaTag);
      } else {
        console.error("لم يتم العثور على عنصر <head> في الصفحة.");
      }
