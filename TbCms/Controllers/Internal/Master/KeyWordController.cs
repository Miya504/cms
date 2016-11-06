using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TbCms.Controllers.Internal.Master
{
    public class KeyWordController : Controller
    {
        //private IKeyWordRepository _rep;

        //public KeyWordController() : this(new KeyWordRepository()) { }

        //public KeyWordController(IKeyWordRepository rep)
        //{
        //    _rep = rep;
        //}

        /// <summary>
        /// 一覧表示(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult List()
        {
            return View();
        }

        ///// <summary>
        ///// 一覧表示(検索).
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public ActionResult List(SystemUserListViewModel model)
        //{
        //    return View();
        //}

        /// <summary>
        /// 新規登録(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult New()
        {
            return View("Input");
        }

        ///// <summary>
        ///// 新規登録(登録).
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public ActionResult New(SystemUserListViewModel model)
        //{
        //    return View("List");
        //}

        /// <summary>
        /// 編集(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Edit(int id)
        {
            return View("Input");
        }

        ///// <summary>
        ///// 編集(登録).
        ///// </summary>
        ///// <returns></returns>
        //[HttpPost]
        //public ActionResult Edit(SystemUserListViewModel model)
        //{
        //    return View("List");
        //}
        
    }
}