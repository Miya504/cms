using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TbCms.Models;

namespace TbCms.Controllers.Internal.Master
{
    public class CategoryController : Controller
    {
        /*
        /// <summary>
        /// リポジトリクラス.
        /// </summary>
        private ICategoryRepository _rep;

        /// <summary>
        /// コンストラクタ.
        /// </summary>
        public CategoryController() : this(new CategoryRepository()) { }

        /// <summary>
        /// 第2コンストラクタ.
        /// </summary>
        /// <param name="rep"></param>
        public CategoryController(ICategoryRepository rep)
        {
            // リポジトリクラスを紐づける.
            _rep = rep;
        }
        */

        /// <summary>
        /// 一覧表示(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult List()
        {

            var db = new TbCmsContext();

            //return View(_rep.GetFirstListData());
            return View();
        }

        /*
        /// <summary>
        /// 一覧表示(検索).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult List(CategoryListViewModel model)
        {

            var db = new TbCmsContext();

            return View(_rep.GetSarchListData(model));
        }
        */

        /// <summary>
        /// 新規登録(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult New(int id)
        {
            var db = new TbCmsContext();

            //return View("Input", _rep.GetInputNewData());
            return View("Input");
        }

        /*
        /// <summary>
        /// 新規登録(登録).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult New(CategoryInputViewModel model)
        {

            if (!ModelState.IsValid)
            {
                return View("Input", model);
            }

            // 登録.
            var ret = _rep.RegistrationInputNewData(model);

            if (!ret)
            {
                // DB登録失敗.
                // TODO：本来はこれだけじゃダメだけど、ひとまず元の画面に戻す.
                return View("Input", model);
            }

            // DB登録に成功したのでリスト画面に戻す.
            // TODO:検索条件を保持しておいた方がよい？.
            var db = new TbCmsContext();
            return View("List", _rep.GetFirstListData());

        }

        /// <summary>
        /// 編集(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Edit(int id)
        {
            var db = new TbCmsContext();

            return View("Input", _rep.GetInputEditData(id));
        }

        /// <summary>
        /// 編集(登録).
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Edit(CategoryInputViewModel model)
        {

            if (!ModelState.IsValid)
            {
                return View("Input", model);
            }

            // 登録.
            var ret = _rep.RegistrationInputEditData(model);

            if (!ret)
            {
                // DB登録失敗.
                // TODO：本来はこれだけじゃダメだけど、ひとまず元の画面に戻す.
                return View("Input", model);
            }

            // DB登録に成功したのでリスト画面に戻す.
            // TODO:検索条件を保持しておいた方がよい？.
            var db = new TbCmsContext();
            return View("List", _rep.GetFirstListData());

        }        
        */

    }
}